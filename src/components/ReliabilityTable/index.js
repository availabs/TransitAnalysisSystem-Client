import React from 'react'
import * as d3 from 'd3'


const ReliabilityTable = ({ tripList, tripTable, stopTemplate }) => {
  if (!(tripList && tripTable && stopTemplate)) {
    return '<div>LOADING</div>'
  }
  
  stopTemplate.unshift(["", "Trip Id"]); // add gtfs

  var table = d3.select(document.createElement("div")).append("table");
  var header = table.append("thead");
  var body = table.append("tbody");

  header
    .append("tr")
    .selectAll("th")
    .data(stopTemplate)
    .enter()
    .append("th")
    .text(function(col) {
      return col[1];
    });

  var colorScale = d3
    .scaleLinear()
    .domain([-60, 0, 60])
    .range(["#99d594", "#ffffbf", "#fc8d59"])
    .interpolate(d3.interpolateLab);

  stopTemplate.shift();
  body
    .selectAll("tr")
    .data(tripTable)
    .enter()
    .append("tr")
    .html(function(tripId) {
      // console.log('row', tripId, tripList[tripId])
      var cols = `<td>${tripId}</td>`;
      var stops = stopTemplate.map(stop => {
        var tripStop =
          tripList[tripId] && tripList[tripId].tripStops[stop[0]]
            ? tripList[tripId].tripStops[stop[0]]
            : null;
        var stopTime =
          tripStop && tripStop.arrivalTime
            ? tripStop.arrivalTime.toTimeString().split(" ")[0]
            : "";
        var stopColor =
          tripStop && tripStop.timeDiff
            ? colorScale(tripStop.timeDiff)
            : "#ddd";
        var style = `style="background-color: ${stopColor}"`;
        return `<td ${style}>${stopTime}</td>`;
      });
      cols += stops.join("");
      return cols;
    });

  return table
};

export default ReliabilityTable
