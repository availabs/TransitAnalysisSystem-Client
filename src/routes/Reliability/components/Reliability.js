import React from 'react'
import PropTypes from 'prop-types'
import Controls from './Controls'
import MareySchedule from '../../../components/MareySchedule'
import formatInput from '../modules/formatInput'
// import ReliabilityTable from '../../../components/ReliabilityTable'
import { withFauxDOM } from 'react-faux-dom'

class Reliability extends React.Component {
  componentDidMount () {
    const {
      lines,
      directions,
      date,
      currentLine,
      currentDirection,
    } = this.props.reliability || {}

    this.props.getDataForDate(date)

    const controlsDOMElement = this.props.connectFauxDOM('div', 'controls')

    const {
      selectDirection,
      selectLine,
    } = this.props

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
    let shouldUpdate = Object.keys(nextProps.reliability).some(
      k => (this.props.reliability[k] !== nextProps.reliability[k]
    ))

    shouldUpdate = shouldUpdate || (this.props.mareySchedule !== nextProps.mareySchedule)

    return shouldUpdate
  }

  componentDidUpdate (prevProps) {
    const {
      date,
      trains,
      currentLine,
      currentDirection,
    } = this.props.reliability || {}

    if (!trains[date]) {
      this.props.getDataForDate(date)
      return
    }

    const {
      tripList,
      tripTable,
      stopTemplate
    } = formatInput(trains[date], currentLine, currentDirection)

    let needNewViz = Object.keys(prevProps.reliability).some(
      k => (this.props.reliability[k] !== prevProps.reliability[k]
    ))

    if (!needNewViz) {
      return
    }

    const mareyDOMElement = this.props.connectFauxDOM('div', 'mareySchedule', true)

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

Reliability.propTypes = {
  selectDirection: PropTypes.func.isRequired,
  selectLine: PropTypes.func.isRequired,
  getDataForDate: PropTypes.func.isRequired,
  reliability: PropTypes.object.isRequired,
  connectFauxDOM: PropTypes.func.isRequired,
  controls: PropTypes.object,
  mareySchedule: PropTypes.object,
}

export default withFauxDOM(Reliability)
