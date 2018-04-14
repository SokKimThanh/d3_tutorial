var polygon_ctrl = function($scope) {
  /* changing title */
  var header = d3.select("header.w3-container");
  header.append("h1").text("Visualization and D3");

  var himlam_map_svg = d3.select("body").select("div.w3-container").selectAll("svg#himlam_map_svg");
  //   himlam_map.attr("width", 811).attr("height", 600);
  var himlam_map_rect = himlam_map_svg.node().getBoundingClientRect();
  var width = himlam_map_rect.width;
  var height = himlam_map_rect.height;

  var lineX_img = d3
    .scaleLog()
    .domain([0, width])
    .range([0, himlam_map_rect.x]);
  var lineY_img = d3
    .scaleLinear()
    .domain([0, height])
    .range([himlam_map_rect.y, 0]);

  var data_set = [
    {
      name: "khu F",
      fill: "red",
      opacity: "0.2",
      stroke_width: "1",
      stoke: "red",
      points:
        "262.86000, 219.05000    413.83912, 244.16898    409.00688, 272.49068    263.28125, 247.84192    "
    },
    {
      name: "khu D",
      fill: "red",
      opacity: "0.2",
      stroke_width: "1",
      stoke: "red",
      points:
        "428.23833, 247.30019    527.10423, 263.55212    523.85385, 290.09693    423.36275, 274.38673"
    },
    {
      name: "khu D",
      fill: "red",
      opacity: "0.2",
      stroke_width: "1",
      stoke: "red",
      points:
        "428.23833, 247.30019    527.10423, 263.55212    523.85385, 290.09693    423.36275, 274.38673"
    },
    {
      name: "khu D",
      fill: "blue",
      opacity: "0.3",
      stroke_width: "1",
      stoke: "red",
      points:
        "255.69702, 132.99495        288.47174, 134.62015        293.07645, 184.45939        301.47328, 185.81372        303.09848, 178.77122        379.75341, 189.87670        379.21168, 200.44046        386.79591, 201.52392        398.71399, 142.47524        432.03045, 145.99650        417.40371, 231.04826        414.15332, 233.21518        264.90644, 205.85777        261.11433, 203.14911"
    },
    {
      name: "khu B",
      fill: "pink",
      opacity: "0.3",
      stroke_width: "1",
      stoke: "red",
      points:
        "249.29647, 39.19352        425.34604, 52.04385        428.84022, 55.77402        429.45994, 80.25261        426.36138, 84.90045        253.46192, 74.05550        249.12395, 69.40767        249.12395, 43.37979        "
    },
    {
      name: "khu E",
      fill: "yellow",
      opacity: "0.3",
      stroke_width: "1",
      stoke: "red",
      points:
        "196.76, 210.08        233.32, 215.35        248.19, 390.11        216.28, 401.88        "
    }
  ];
  // data_set = JSON.stringify(JSON.parse(data_set));

  himlam_map_svg
    .data(data_set)
    .enter()
    .append("polygon")
    .attr("points", function(d) {
      return d.points;
    })
    // .attr("fill", function(d) {
    //   return d.fill;
    // })
    // .attr("opacity", function(d) {
    //   return d.opacity;
    // })
    // .attr("stroke-width", function(d) {
    //   return d.stroke_width;
    // })
    // .attr("stoke", function(d) {
    //   return d.stoke;
    // })
    // .text(function(d) {
    //   return d.name;
    // });
//Add the SVG Text Element to the svgContainer
 var text = himlam_map_svg.selectAll("text")
                        .data(data_set)
                       .enter()
                        .append("text");
    //Add the text attributes
 var textLabels = text
                 .attr("x", function(d) { return d.cx; })
                 .attr("y", function(d) { return d.cy; })
                  .text( function (d) { return "( " + d.cx + ", " + d.cy +" )"; })
                  .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                  .attr("fill", "red");
};
