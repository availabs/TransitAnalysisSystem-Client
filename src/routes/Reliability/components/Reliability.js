import React from 'react'
// import PropTypes from 'prop-types'
import Controls from './Controls'
import MareySchedule from '../../../components/MareySchedule'
import formatInput from '../modules/formatInput'
// import ReliabilityTable from '../../../components/ReliabilityTable'
import { withFauxDOM } from 'react-faux-dom'

class Reliability extends React.Component {
  componentDidMount () {
    this.props.getDataForDate(20170716)

    const controlsDOMElement = this.props.connectFauxDOM('div', 'controls')

    const {
      selectDirection,
      selectLine,
    } = this.props

    const {
      lines,
      directions,
      date,
      currentLine,
      currentDirection,
    } = this.props.reliability || {}

    Controls({
      domElement: controlsDOMElement,
      directions,
      lines,
      date,
      selectDirection,
      currentLine,
      currentDirection,
      selectLine
    })
  }

  shouldComponentUpdate (nextProps) {
    return Object.keys(nextProps).some(k => (this.props[k] !== nextProps[k]))
  }

  componentDidUpdate () {
    const mareyDOMElement = this.props.connectFauxDOM('div', 'mareySchedule')

    const {
      date,
      trains,
      currentLine,
      currentDirection,
    } = this.props.reliability || {}

    if (!trains[date]) {
      this.props.getDataForDate(20170716)
      return
    }

    console.log('componentDidUpdate')

    const {
      tripList,
      tripTable,
      stopTemplate
    } = formatInput(trains[date], currentLine, currentDirection)

    MareySchedule({
      domElement: mareyDOMElement,
      tripList,
      tripTable,
      stopTemplate,
    })
  }

  render () {
    return (
      <div>
        <div>
          {this.props.controls}
        </div>
        <div>
          {this.props.mareySchedule || 'LOADING'}
        </div>
      </div>
    )
  }
}

        // <Controls
          // date={date}
          // lines={lines}
          // directions={directions}
          // currentLine={currentLine}
          // currentDirection={currentDirection}
        // />


//
// < ReliabilityTable({ tripList, tripTable, stopTemplate }) />

// Counter.propTypes = {
// counter: PropTypes.number.isRequired,
// increment: PropTypes.func.isRequired,
// doubleAsync: PropTypes.func.isRequired
// };

export default withFauxDOM(Reliability)
