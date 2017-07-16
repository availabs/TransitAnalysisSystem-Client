import fetch from 'isomorphic-fetch'
import * as d3 from 'd3'

import formatInput from './formatInput'

// ------------------------------------
// Constants
// ------------------------------------
export const LINE_SELECT = 'LINE_SELECT'
export const DIRECTION_SELECT = 'DIRECTION_SELECT'
export const DATA_RECEIVED = 'DATA_RECEIVED'

export const selectLine = line => ({
  type: LINE_SELECT,
  payload: line
})

export const selectDirection = direction => ({
  type: DIRECTION_SELECT,
  payload: direction
})

export const getDataForDate = date => {
  return (dispatch, getState) => {
    const start = `${date}%200000`
    const end = `${+date}%200300`

    fetch(`http://lor.availabs.org:9009/report/${start}/to/${end}`)
      .then(function (d) {
        return d.text()
      })
      .then(function (csvReport) {
        const schedule = d3.csvParse(csvReport, row => {
          var timestampCols = [
            'ata',
            'eta',
            'gtfsrt_msg_timestamp',
            'position_timestamp',
            'sta'
          ]
          // format timestampCols in to js timestampCols
          timestampCols.forEach(key => {
            if (row[key].length > 0) {
              var seconds = +row[key]
              row[key] = new Date(0)
              row[key].setUTCSeconds(seconds)
            } else {
              row[key] = null
            }
          })
          return row
        })

        // sort by order mesages received
        schedule.sort(
          (a, b) => b.gtfsrt_msg_timestamp - a.gtfsrt_msg_timestamp
        )

        var trains = {
          sixTrain: schedule.filter(d => d.route_id.match(/6/)),
          fiveTrain: schedule.filter(d => d.route_id.match(/5/)),
          fourTrain: schedule.filter(d => d.route_id.match(/4/))
        }

        var lines = Object.keys(trains)

        var activeLine = lines[0]

        // console.log('activeLine', activeLine)

        // var directions = [
          // { val: 'N', name: 'Uptown' },
          // { val: 'S', name: 'Downtown' }
        // ]

        var currentDirection = 'N'

        const formattedInput = formatInput(trains, activeLine, currentDirection)

        dispatch({
          type: DATA_RECEIVED,
          payload: {
            [date]: formattedInput
          }
        })
      })
      .catch(console.error.bind(console))
  }
}

export const actions = {
  selectLine,
  selectDirection,
  getDataForDate
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DATA_RECEIVED]: (state, action) => {
    const newState = Object.assign({}, state)
    const date = Object.keys(action.payload)[0]
    newState.date = date
    newState.data[date] = action.payload[date]
    return newState
  },
  [LINE_SELECT]: (state, action) =>
    Object.assign({}, state, { currentLine: action.payload }),
  [DIRECTION_SELECT]: (state, action) =>
    Object.assign({}, state, { currentDirection: action.payload })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  currentDirection: 'N',
  currentLine: 6,
  data: {},
  date: 20170716,
  directions: ['N', 'S'],
  lines: [4, 5, 6]
}

export default function reliabilityReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}