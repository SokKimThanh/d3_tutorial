var circle_ctrl = function ($scope, circle_service) {
  /* changing title */
  let header = d3.select("header.w3-container");
  header.append("h1")
  d3.select("header h1").text("adding text in SVG Circle Elements");

  //Circle Data Set
  var circleData = [
    { cx: 20, cy: 20, radius: 20, color: "green" },
    { cx: 70, cy: 70, radius: 20, color: "purple" }
  ];

  //Create the SVG Viewport
  var svgContainer = d3
    .select("div#circle_area_div")
    .append("svg")
    .attr("width", 200)
    .attr("height", 200);

  //Add circles to the svgContainer
  var circles = d3.selectAll("div svg")
    .selectAll("circle")
    .data(circleData)
    .enter()
    .append("circle");

  //Add the circle attributes
  var circleAttributes = circles
    .attr("cx", function (d) {
      return d.cx;
    })
    .attr("cy", function (d) {
      return d.cy;
    })
    .attr("r", function (d) {
      return d.radius;
    })
    .style("fill", function (d) {
      return d.color;
    });

  //Add the SVG Text Element to the svgContainer
  var text = svgContainer
    .selectAll("text")
    .data(circleData)
    .enter()
    .append("text");

  //Add SVG Text Element Attributes
  var textLabels = text
    .attr("x", function (d) {
      return d.cx;
    })
    .attr("y", function (d) {
      return d.cy;
    })
    .text(function (d) {
      return "( " + d.cx + ", " + d.cy + " )";
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "20px")
    .attr("fill", "red");
  // document.querySelector('#D3line').innerHTML = '';
};
