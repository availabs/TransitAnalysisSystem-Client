import React from 'react'
import * as d3 from 'd3'

const margin = { top: 20, right: 30, bottom: 20, left: 150 }

const MareySchedule = ({ domElement, tripList, tripTable, stopTemplate }) => {

  console.log('========== MareySchedule BEGIN ==========')
  if (!(tripList && tripTable && stopTemplate)) {
    return <div>LOADING</div>
  }

  var startTime = tripList[tripTable[0]] && tripList[tripTable[0]].startTime
  var endTime = tripList[tripTable[tripTable.length - 1]] && tripList[tripTable[tripTable.length - 1]].startTime

  if (!(startTime && endTime)) {
    return <div>LOADING</div>
  }

  var stations = [] // lazily loaded

  var formatTime = d3.timeFormat('%I:%M%p')

  var width = 1440 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom

  var x = d3.scaleTime().domain([startTime, endTime]).range([0, width])

  var y = d3.scaleLinear().range([0, height])

  var z = d3
    .scaleLinear()
    .domain([-60, 0, 60])
    .range(['#99d594', '#ffffbf', '#fc8d59'])
    .interpolate(d3.interpolateLab)

  var svg = d3
    .select(domElement)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  svg
    .append('defs')
    .append('clipPath')
    .attr('id', 'clip')
    .append('rect')
    .attr('y', -margin.top)
    .attr('width', width)
    .attr('height', height + margin.top + margin.bottom)

  var prevDistance = 0
  var getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
  }

  var stations = stopTemplate.map((station, i) => {
    var prevStation = stopTemplate[i - 1]
    var distance =
      i === 0
        ? 0
        : prevDistance +
          getDistance(station[2], station[3], prevStation[2], prevStation[3])
    prevDistance = distance

    return {
      id: station[0],
      name: station[1],
      distance
    }
  })
  var stationHash = stations.reduce((prev, curr) => {
    prev[curr.id] = curr
    return prev
  }, {})
  // -------------------------------------------------
  // Create Graph Layout & Axes
  // -------------------------------------------------
  y.domain(
    d3.extent(stations, function (d) {
      return d.distance
    })
  )

  var station = svg
    .append('g')
    .attr('class', 'station')
    .selectAll('g')
    .data(stations)
    .enter()
    .append('g')
    .attr('transform', function (d) {
      return 'translate(0,' + y(d.distance) + ')'
    })

  station.append('text').attr('x', -6).attr('dy', '.35em').text(function (d) {
    return d.name
  })

  station.append('line').attr('x2', width)

  var xAxis = d3.axisTop().scale(x).ticks(8).tickFormat(formatTime)

  var xAxisBottom = d3.axisBottom().scale(x).ticks(8).tickFormat(formatTime)

  svg.append('g').attr('class', 'x top axis').call(xAxis)

  svg
    .append('g')
    .attr('class', 'x bottom axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxisBottom)
  // -------------------------------------------------
  // Create Train Lines and Stop points
  // -------------------------------------------------

  var train = svg
    .append('g')
    .attr('class', 'train')
    .attr('clip-path', 'url(#clip)')
    .selectAll('g')
    .data(tripTable)
    .enter()
    .append('g')
    .attr('class', function (d) {
      return d
    })

  train
    .selectAll('line')
    .data(function (d) {
      var activeStations = stations.filter(
        station => tripList[d].stopOrder.indexOf(station.id) !== -1
      )
      var tripData = activeStations
        .map((station, i) => {
          if (i === 0) return null
          return {
            start: activeStations[i - 1].distance,
            arrival:
              tripList[d].tripStops[activeStations[i - 1].id].arrivalTime,
            end: station.distance,
            departure: tripList[d].tripStops[station.id].arrivalTime,
            timeDiff: tripList[d].tripStops[activeStations[i - 1].id].timeDiff
          }
        })
        .filter(d => d) // get rid of the null entry
      return tripData
    })
    .enter()
    .append('line')
    .attr('x1', function (d, i) {
      return x(d.arrival)
    })
    .attr('x2', function (d) {
      return x(d.departure)
    })
    .attr('y1', function (d) {
      return y(d.start)
    })
    .attr('y2', function (d) {
      return y(d.end)
    })
    .style('stroke', function (d) {
      return d.timeDiff ? z(d.timeDiff) : '#ddd'
    })

  train
    .selectAll('circle')
    .data(function (d) {
      var activeStations = stations.filter(
        station => tripList[d].stopOrder.indexOf(station.id) !== -1
      )
      var tripData = activeStations.map((station, i) => {
        return {
          end: station.distance,
          departure: tripList[d].tripStops[station.id].arrivalTime,
          timeDiff: tripList[d].tripStops[station.id].timeDiff
        }
      })
      return tripData
    })
    .enter()
    .append('circle')
    .attr('transform', function (d) {
      return 'translate(' + x(d.departure) + ',' + y(d.end) + ')'
    })
    .attr('r', 2)
    .style('fill', function (d) {
      return d.timeDiff ? z(d.timeDiff) : '#ddd'
    })

  console.log('========== MareySchedule END ==========')
}

// MareySchedule.propTypes = {
// columns: PropTypes.array.isRequired,
// data: PropTypes.array.isRequired,
// rowClicked: PropTypes.func.isRequired
// };

export default MareySchedule
