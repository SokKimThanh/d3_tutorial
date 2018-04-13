var geo_ctrl = function ($scope, d3service) {
    //Make an SVG Container
    // var auto_link = "https://pms-dev.wahsis.net";
    // d3service.get_content_title(auto_link);

    var div_d3_tut = d3.selectAll("div.w3-container").select("div#d3_tut");
    div_d3_tut.style('background-color', "#fff")
    var div_d3_ctrl = d3.selectAll("div.w3-container").select("div#d3_ctrl");
    var svgCircle = div_d3_ctrl.select("svg").attr("width", 50).attr("height", 50);
    var svgRectangle = div_d3_ctrl.select("svg#two").attr("width", 50).attr("height", 50);
    var svgEllipse = div_d3_ctrl.select("svg#three").attr("width", 50).attr("height", 50);
    var svgLine = div_d3_ctrl.select("svg#four").attr("width", 50).attr("height", 50);

    //Draw the Circle
    var circle = svgCircle.append("circle").attr("cx", 30).attr("cy", 30).attr("r", 20);
    //Draw the Rectangle
    var rectangle = svgRectangle.append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 50)
        .attr("height", 100)
        .attr("opacity", "0.5")
    //Draw the Ellipse
    var ellipse = svgEllipse.append("ellipse")
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("rx", 25)
        .attr("ry", 10);
    //Draw the line
    var line = svgLine.append("line")
        .attr("x1", 5)
        .attr("y1", 5)
        .attr("x2", 50)
        .attr("y2", 50)
        .attr("stroke-width", 2)
        .attr("stroke", "black");
    /* changing logo */
    let span = d3.select("span.w3-bar-item.w3-right");
    let img = span.append("img");
    let logo = d3.select("span img").attr("src", "w3images/d3.png").attr("width", "16").attr("height", "16");
    /* changing title */
    // var header = d3.select("header.w3-container");
    // header.append("h1").text("Visualization and D3")
    d3.select("h5.text-capitalize b").text("Visualization and D3")

    /* draw svg */
    // d3.select("div.w3-container").append("div").attr("id", "drawing");
    let div_drawing = d3.select("div#drawing");
    div_drawing.append("h5").text("Drawing on SVG AREA");

    let svg_area = d3.select("div#drawing_area svg#svg_area");
    svg_area.attr("width", 500).attr("height", 400);

    /* setup functions  scale */
    var scaleLog = d3.scaleLog().domain([250, 100000]).range([0, 600]);
    var scaleLinear = d3.scaleLinear().domain([15, 90]).range([250, 0]);
    var scaleSqrt = d3.scaleSqrt().domain([52070, 1380000000]).range([10, 40]);

    svg_area.style("background-color", "#fff")
    svg_area.append("circle").
        attr("cx", scaleLog(13330)).
        attr("cy", scaleLinear(77)).
        attr("r", scaleSqrt(1300000000)).
        attr("id", "hinh_tron_dong").attr("fill", "red");
}