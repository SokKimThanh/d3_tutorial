var map_location_ctrl = function ($scope, map_location_service) {
    /* changing title */
    let header = d3.select("header#map_location").append("h1");
    d3.select("header h1").text("Map location");

    let myData = [];
    let div = d3.select("div#map_location").attr("class", "text-capitalize");
    $scope.get_list = () => {
        for (i = 0; i < myData.length; i++) {
            div.append("p");
        }
        var p = d3.select("div#map_location")
            .selectAll("p")
            .data(myData)
            .text(function (d) {
                return d.mgs;
            });
    };
    $scope.add = (data) => {
        if (data !== undefined && data !== null && data !== "") {
            let obj = { mgs: String(data) };
            myData.push(obj);
            $scope.get_list();
        } else {
            map_location_service.notify("no data!")
        }
    };
    let data = [
        {
            id: "DO114", name: "DO114", fill: "green", opacity: "0.5", points: "443.90148, 226.99507 493.50411, 219.42857 506.11494, 226.99507 510.31856, 244.65025 442.22003, 255.57964"
        },
        {
            id: "DO101", name: "DO101", fill: "green", opacity: "0.5", points: "431.19542, 451.26970 456.08752, 449.66376 461.70832, 499.44796 436.81622, 502.65984"
        }
    ];
    var w = window.innerWidth,
        h = window.innerHeight,
        margin = { top: 40, right: 20, bottom: 20, left: 40 },
        radius = 6;

    var xScale = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return d.x + 10; })])
        .range([margin.left, w - margin.right]);  // Set margins for x specific

    // We're passing in a function in d3.max to tell it what we're maxing (y value)
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return d.y + 10; })])
        .range([margin.top, h - margin.bottom]);  // Set margins for y specific
    // Create Event Handlers for mouse

    function handleMouseOver(d, i) {  // Add interactivity

        // Use D3 to select element, change color and size
        d3.select(this).attr({
            fill: "orange",
            r: radius * 2
        });

        // Specify where to put label of text
        svg.append("text").attr({
            id: "t" + d.x + "-" + d.y + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
            x: function () { return xScale(d.x) - 30; },
            y: function () { return yScale(d.y) - 15; }
        })
            .text(function () {
                return [d.x, d.y];  // Value of the text
            });
    }

    function handleMouseOut(d, i) {
        // Use D3 to select element, change color back to normal
        d3.select(this).attr({
            fill: "black",
            r: radius
        });

        // Select text by id and then remove
        d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
    }

    $scope.export = () => {
        var getPoints = (d) => {
            let arr_string = d.points.split(" ");
            let arr_string_new = [];
            for (x in arr_string) {
                let obj = arr_string[x];
                let dauphay = obj.charAt(obj.length - 1);
                let string_simple = "";
                if (dauphay === ",") {
                    string_simple = obj.substring(0, obj.length - 1);
                } else {
                    string_simple = obj;
                }
                arr_string_new.push(string_simple);
            }
            let string_join = arr_string_new.join();
            return string_join;
        }
    }
    $scope.draw = () => {
        let map_div = d3.select('div#map_phuoc_tien').append('svg').attr("width", 2048).attr("height", 1075).attr("id", "main_svg")
        let map_img = d3.select("div svg#main_svg").append('svg:image').attr("xlink:href", "/w3images/phuoctien.jpg");
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            d3.select("svg#main_svg")
                .append("polygon")
                .attr("ng-click", "counting()").attr("ng-init", "count = 0").attr("ng-model", "count")
                .attr("points", function () { return d.points; })
                .attr("fill", function () { return d.fill; })
                .attr("opacity", function () { return d.opacity; })
        }

    }
    $scope.getevents = () => {
        var circleData = [{ "x": "050", "y": "050", "r": "30", "color": "yellow", "fruit": "banana" },
        { "x": "100", "y": "100", "r": "30", "color": "purple", "fruit": "grape" },
        { "x": "150", "y": "150", "r": "30", "color": "red", "fruit": "apple" }
        ];
        var svg = d3.select("#map_location").append("svg");

        var circles = svg.selectAll("circle").data(circleData).enter().append("circle");
        circles.data();
        circles
            .attr("cx", function (d, i) { return d.x; })
            .attr("cy", function (d, i) { return d.y; })
            .attr("r", function (d, i) { return d.r; })
            .attr("ng-click", "couting()").attr("ng-init", "count = 0").attr("ng-model", "count")
            .style("fill", function (d, i) { return d.color; });
        d3.selectAll("circle")
            .on("mouseover", function (d, i) { alert(d.fruit); });
        d3.selectAll("circle")
            .on("mouseout", function (d, i) { alert("is tasty!"); });
    }
    $scope.counting = () => {
        return $scope.count++;
    }
}
