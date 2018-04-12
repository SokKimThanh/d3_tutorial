var DATA_BINDING_IN_D3 = function () {
  /* Data Binding in D3 */
  /* data() */
  var myData = ["Hello World!", "Hello D3", "Hello JavaScript"];
  let myPortNumber = [100, 0300, 4000, 30, 5000, 3000, 1000];

  var ul = d3
    .select("ul")
    .selectAll("li")
    .data(myData)
    .text(function (d) {
      return d;
    });

  var myData = 100;

  var p3 = d3
    .select("body")
    .selectAll("p")
    .data(myData)
    .text(function (d, i) {
      return d;
    });
  var p2 = d3.select("div#portNumber").selectAll("p").data(myPortNumber)
    .text(function (portNumber) { return portNumber; });

  var data = [4, 1, 6, 2, 8, 9];
  var body = d3.select("body")
    .selectAll("span")
    .data(data)
    .enter()
    .append("span")
    .text(function (d) { return d + " "; });
}
