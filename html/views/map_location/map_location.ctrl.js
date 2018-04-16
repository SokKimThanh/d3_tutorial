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


}
