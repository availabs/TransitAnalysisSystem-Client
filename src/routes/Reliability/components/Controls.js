import React from 'react'
import * as d3 from 'd3'

const Controls = ({
  domElement,
  directions,
  lines,
  date,
  selectDirection,
  currentLine,
  currentDirection,
  selectLine
}) => {

  if (!(directions && lines)) {
    return <div>Loading</div>
  }

  var directionControl = d3
    .select(domElement)
    .append('span')
    .attr('class', 'directionControl')

  directionControl
    .append('span')
    .text('Direction')

  directionControl
    .append('select')
    .attr('class', 'dirControl')
    .selectAll('option')
    .data(directions)
    .enter()
    .append('option')
    .attr('value', d => {
      return d.val
    })
    .text(d => {
      return d.name
    })

  directionControl.on('change', () => {
    selectDirection(d3.select('.dirControl').property('value'))
  })

  var lineControl = d3
    .select(domElement)
    .append('span')
    .attr('class', 'lineControl')

  lineControl
    .append('span')
    .text('Line')

  lineControl
    .append('select')
    .attr('class', 'trainControl')
    .selectAll('option')
    .data(lines)
    .enter()
    .append('option')
    .attr('value', d => {
      return d
    })
    .text(d => {
      return d
    })

  lineControl.on('change', () => {
    selectLine(d3.select('.trainControl').property('value'))
  })

  return (
    <div className='controls'>
      { directionControl }
      { lineControl }
    </div>
  )
}

export default Controls
