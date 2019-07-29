var data = [30, 86, 168, 281, 303, 365];

d3.select("#chart")
  .selectAll("div")
  .data(data)
  .enter()
    .append("div")
    .attr('class', "bar")
    .style("width", function(d,i) {
      return d + "px"
    })