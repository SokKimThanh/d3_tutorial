var top_container_ctrl = function($scope) {


  /* changing logo */

  let span = d3.select("span.w3-bar-item.w3-right");
  let img = span.append("img");
  let logo = d3
    .select("span img")
    .attr("src", "w3images/d3.png")
    .attr("width", "16")
    .attr("height", "16");
};
