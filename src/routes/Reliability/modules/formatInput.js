import stopTables from './stopsTable'


export default function formatInput (trains, activeLine, currentDirection) {
  var trips = trains[activeLine].reduce((prev, curr) => {
    if (!prev[curr.gtfsrt_key]) {
      prev[curr.gtfsrt_key] = []
    }
    prev[curr.gtfsrt_key].push(curr)
    return prev
  }, {})

  var stops = trains[activeLine].reduce((prev, curr) => {
    if (prev.indexOf(curr.stop_id) === -1) {
      prev.push(curr.stop_id)
    }
    return prev
  }, [])


  var tripList = Object.keys(trips).reduce((prev, currentTrip) => {
    var tripStops = trips[currentTrip].reduce((prev, curr) => {
      if (!prev[curr.stop_id]) {
        prev[curr.stop_id] = []
      }
      if (curr.ata || curr.eta) {
        // gtfsr update must arrive or have eta
        // for next stop or its not included
        prev[curr.stop_id].push(curr)
      }
      return prev
    }, {})

    Object.keys(tripStops).forEach(stopId => {
      var lastMessage = tripStops[stopId][tripStops[stopId].length - 1]
      if (lastMessage) {
        var arrivalTime = lastMessage.ata ? lastMessage.ata : lastMessage.eta
        var scheduledTime = lastMessage.sta
        tripStops[stopId] = {
          arrivalTime,
          scheduledTime,
          timeDiff: (arrivalTime - scheduledTime) / 1000
        }
      } else {
        // There is never an arrival time at this stop
        // so remove it from the trip
        delete tripStops[stopId]
      }
    })

    var stopOrder = Object.keys(tripStops).sort((a, b) => {
      return b.arrivalTime - a.arrivalTime
    })

    if (Object.keys(stopOrder).length > 0) {
      prev[currentTrip] = {
        stopOrder,
        tripStops,
        firstStop: stopOrder[0],
        lastStop: stopOrder[stopOrder.length - 1],
        direction: stopOrder[0][stopOrder[0].length - 1], // last char of stopId indicates direction
        numStops: stopOrder.length,
        startTime: tripStops[stopOrder[0]].arrivalTime,
        endTime: tripStops[stopOrder[stopOrder.length - 1]].arrivalTime
      }
    }
    return prev
  }, {})

  var tripTable = Object.keys(tripList)
    .filter(
      tripId =>
        tripList[tripId].direction === currentDirection &&
        tripList[tripId].numStops > 1
    )
    .sort((a, b) => tripList[a].startTime - tripList[b].startTime)

  var stopTemplate = stopTables[activeLine][currentDirection]

  return {
    tripList,
    tripTable,
    stopTemplate
  }
}
