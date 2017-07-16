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
  const directionControlStr = `
      <span class="directionControl">
        <span>Direction</span>
      </span>
      `

  const lineControlStr = `
      <span class="lineControl">
        <span>Line</span>
      </span>
    `

  var directionControl = d3
    .select(domElement)
    .html(directionControlStr)
    .append('select')
    .attr('class', 'dirControl')

  directionControl
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
    .html(lineControlStr)
    .append('select')
    .attr('class', 'trainControl')

  lineControl
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
