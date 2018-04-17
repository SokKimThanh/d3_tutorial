var polygon_ctrl = function ($scope, $http) {
  $(function () {
    /* changing title */
    let header = d3.select("header#header_title.w3-container");
    header.append("h1").text("Shapping on map");
    var data_set = [
      {
        id: "1",
        name: "khu F",
        fill: "red",
        opacity: "0.2",
        stroke_width: "1",
        stoke: "red",
        points: "262.86000, 219.05000    413.83912, 244.16898    409.00688, 272.49068    263.28125, 247.84192    "
      },
      {
        name: "khu D",
        fill: "red",
        opacity: "0.2",
        stroke_width: "1",
        stoke: "red",
        points: "428.23833, 247.30019    527.10423, 263.55212    523.85385, 290.09693    423.36275, 274.38673"
      },
      {
        name: "khu D",
        fill: "red",
        opacity: "0.2",
        stroke_width: "1",
        stoke: "red",
        points: "428.23833, 247.30019    527.10423, 263.55212    523.85385, 290.09693    423.36275, 274.38673"
      },
      {
        name: "khu D",
        fill: "blue",
        opacity: "0.3",
        stroke_width: "1",
        stoke: "red",
        points: "255.69702, 132.99495        288.47174, 134.62015        293.07645, 184.45939        301.47328, 185.81372        303.09848, 178.77122        379.75341, 189.87670        379.21168, 200.44046        386.79591, 201.52392        398.71399, 142.47524        432.03045, 145.99650        417.40371, 231.04826        414.15332, 233.21518        264.90644, 205.85777        261.11433, 203.14911"
      },
      {
        name: "khu B",
        fill: "pink",
        opacity: "0.3",
        stroke_width: "1",
        stoke: "red",
        points: "249.29647, 39.19352        425.34604, 52.04385 428.84022, 55.77402 429.45994, 80.25261        426.36138, 84.90045        253.46192, 74.05550        249.12395, 69.40767        249.12395, 43.37979        "
      },
      {
        name: "khu E",
        fill: "yellow",
        opacity: "0.3",
        stroke_width: "1",
        stoke: "red",
        points: "196.76, 210.08 233.32, 215.35 248.19, 390.11 216.28, 401.88 "
      }
    ];
    for (var i = 0; i < data_set.length; i++) {
      var d = data_set[i];
      d.id = Number(i) + 1;
      d3.select("svg")
        .append("polygon")
        .attr("points", function () { return d.points; })
        .attr("fill", function () { return d.fill; })
        .attr("opacity", function () { return d.opacity; })
    }
  })
};
