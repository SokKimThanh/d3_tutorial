var dimple_ctrl = function () {
    var svg = dimple.newSvg("body", 800, 600);
    var data = [
        { "Word": "Hello", "Awesomeness": 2000 },
        { "Word": "World", "Awesomeness": 3000 }
    ];
    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Word");
    chart.addMeasureAxis("y", "Awesomeness");
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();
}