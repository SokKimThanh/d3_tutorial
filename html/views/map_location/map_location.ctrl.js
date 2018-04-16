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
    $scope.export = (data) => {
        var myData = [1, 2, 3, 4, 5];

        var p = d3.select("div#map_location")
            .selectAll("p").data(myData).enter().append("p")

            .text(function (d, i) {
                return "value: " + d + ", position: " + i;
            });
    }
    $scope.draw = () => {
        let map_div = d3.select('div#map_phuoc_tien').append('svg').attr("width", 2048 / 1.6).attr("height", 1075).attr("class", "img-fluid").attr("id", "main_svg");
        let map_img = d3.select("div svg#main_svg").append('svg:image').attr("xlink:href", "/w3images/phuoctien.jpg").attr("class", "img img-responsive")
        let data = [{
            id: "D01104",
            name: "D01104",
            fill: "sandybrown",
            opacity: "0.3",
            stroke_width: "1",
            stoke: "red",
            points: "1145.0, 189.50 1177.2, 183.88 1184.4, 232.06 1167.5, 237.68 1167.5, 245.71 1156.3, 245.71"
        }, {
            id: "D01105",
            name: "D01104",
            fill: "sandybrown",
            opacity: "0.3",
            stroke_width: "1",
            stoke: "red",
            points: "1145.0, 189.50 1177.2, 183.88 1184.4, 232.06 1167.5, 237.68 1167.5, 245.71 1156.3, 245.71"
        }];
        var lineX_img = d3
            .scaleLog()
            .domain([0, 2048 / 1.6])
            .range([0, 2048 / 1.6]);
        var lineY_img = d3
            .scaleLinear()
            .domain([0, 1075])
            .range([1075, 0]);
        d3.select("svg#main_svg").selectAll("svg")
            .data(data).enter().append("polygon")
            .attr("points", function (d) {

                let xy = d.points.split(" ");
                let xxyy = xy.trim(1,xy.length - 1)
                let string_join = "";
                for (x in xxyy) {
                    let scale_xx = lineX_img(xxyy[x]);
                    string_join += scale_xx;
                }
                return string_join;
            })
            .attr("fill", function (d) { return d.fill })


    }
}
