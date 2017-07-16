import React from 'react'
// import PropTypes from 'prop-types'
import Controls from './Controls'
import MareySchedule from '../../../components/MareySchedule'
// import ReliabilityTable from '../../../components/ReliabilityTable'
import { withFauxDOM } from 'react-faux-dom'

class Reliability extends React.Component {
  componentDidMount () {
    this.props.getDataForDate(20170716)
  }

  componentDidUpdate () {
    const domElement = this.props.connectFauxDOM('div', 'mareySchedule')
    const {
      lines,
      directions,
      date,
      data,
      currentLine,
      currentDirection,
    } = this.props.reliability || {}

    const {
      tripList,
      tripTable,
      stopTemplate
    } = (data && data[date]) || {}


    console.log('componentDidUpdate')

    MareySchedule({
      domElement,
      tripList,
      tripTable,
      stopTemplate,
    })
  }

  render () {
    // const {
      // lines,
      // directions,
      // date,
      // data,
      // currentLine,
      // currentDirection,
    // } = this.props.reliability || {}

    // const {
      // tripList,
      // tripTable,
      // stopTemplate
    // } = (data && data[date]) || {}

    console.log('RENDER')
    return (
      <div>
        {this.props.mareySchedule || 'LOADING'}
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
