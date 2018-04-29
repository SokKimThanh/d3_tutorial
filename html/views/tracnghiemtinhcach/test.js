$(document).ready(function () {
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-pink',
    radioClass: 'iradio_square-pink',
    increaseArea: '-10%' // optional
  });
});
document.getElementById('tracnghiemtinhcach')
  .style['color'] = palette.getText('Light Blue', '700', 'Secondary');

var tr = d3.select("#body").select("table")
  .selectAll("tr")  // selects all <tr>
  .data(danhsach_cauhoi)      // joins matrix array 
  .enter()           // create placeholders for each row in the array
  .append("tr");// create <tr> in each placeholder


var label = tr.selectAll("td")
  .data(function (d) {    // joins inner array of each row 
    return d;
  })
  .enter()    // create placeholders for each element in an inner array
  .append("td").append("label").text(function (d) { return d.number + ". " + d.question })
  .on("mouseover", function () {
    d3.select(this)
      .attr("class", function (d) {
        if (d.number % 2 === 0) {
          return 'text-danger'
        } else {
          return 'text-success'
        }
      })
  })
  .on("mouseout", function () {
    d3.select(this)
      .attr("class", "text-dark")
  })
label.enter().append("form").append("label").attr("class", "radio-inline").text("e").on("mouseover", function () {
  d3.select(this)
    .attr("class", function (d) {
      if (d.number % 2 === 0) {
        return 'text-dark'
      } else {
        return 'text-dark'
      }
    })
})
  .on("mouseout", function () {
    d3.select(this)
      .attr("class", "text-dark")
  }).append("input").attr("type", "radio")
