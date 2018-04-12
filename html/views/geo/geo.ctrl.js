var geo_ctrl = function ($scope) {
    //Make an SVG Container
    var div_d3_tut = d3.selectAll("div.w3-container").select("div#d3_tut");
    var div_d3_ctrl = d3.selectAll("div.w3-container").select("div#d3_ctrl");
    var svgCircle = div_d3_ctrl.append("svg").attr("width", 50).attr("height", 50);
    var svgRectangle = div_d3_ctrl.append("svg#two").attr("width", 50).attr("height", 50);
    var svgEllipse = div_d3_ctrl.append("svg#three").attr("width", 50).attr("height", 50);
    var svgLine = div_d3_ctrl.append("svg#four").attr("width", 50).attr("height", 50);

    //Draw the Circle
    var circle = svgCircle.append("circle").attr("cx", 30).attr("cy", 30).attr("r", 20);
    //Draw the Rectangle
    var rectangle = svgContainer.append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 50)
        .attr("height", 100);
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
}