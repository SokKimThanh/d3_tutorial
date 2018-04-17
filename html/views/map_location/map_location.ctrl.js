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
        fill: "pink",
        opacity: "0.3",
        stroke_width: "1",
        stoke: "red",
        points: "1145.0, 189.50 1177.2, 183.88 1184.4, 232.06 1167.5, 237.68 1167.5, 245.71 1156.3, 245.71"
    }];
    $scope.export = (data) => {
        var svg = d3.select("div#map_phuoc_tien svg")
        var g = svg.append("g")
            .attr("transform", function (d, i) {
                return "translate(0,0)";
            });

        var ellipse = g.append("polygon").attr("points","1083,498,1089,498,1088,487,1104,484,1104,490,1113,489,1114,492,1122,492,1122,485,1136,484,1138,497,1145,495,1147,507,1143,506,1146,520,1091,530")


        g.append("text")
            .attr("x", 140)
            .attr("y", 50)
            .attr("stroke", "steelblue")
            .attr("font-family", "sans-serif")
            .attr("font-size", "24px")
            .text("11");
    }
    $scope.draw = () => {
        let map_div = d3.select('div#map_phuoc_tien').append('svg').attr("width", 2048 / 1.6).attr("height", 1075).attr("class", "img-fluid").attr("id", "main_svg");
        let map_img = d3.select("div svg#main_svg").append('svg:image').attr("xlink:href", "/w3images/phuoctien.jpg").attr("class", "img img-responsive")
 
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
        d3.select("svg#main_svg").selectAll("svg")
            .data(data).enter().append("polygon")
            .attr("points", function (d) {
                return getPoints(d);
            })
            .attr("fill", function (d) { return d.fill })
    }
}
