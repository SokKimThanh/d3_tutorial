var configuration = function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/d3_app/d3app.index.html"
        })
        .when("/geo", {
            templateUrl: "views/geo/geo.view.html",
            controller: "geo_ctrl"
        })
}