var configuration = function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/page_content/page_content.index.html",
      controller: "page_content_ctrl"
    })
    .when("/basic", {
      templateUrl: "views/basic/basic.view.html",
      controller: "basic_ctrl"
    })
    .when("/polygon", {
      templateUrl: "views/polygon/polygon.view.html",
      controller: "polygon_ctrl"
    })
    .when("/circle", {
      templateUrl: "views/circle/circle.view.html",
      controller: "circle_ctrl"
    })
    .when("/map_location", {
      templateUrl: "views/map_location/map_location.view.html",
      controller: "map_location_ctrl"
    }).when("/trac_nghiem_tinh_cach", {
      templateUrl: "views/tracnghiemtinhcach/tntc.view.html",
      controller: "trac_nghiem_tinh_cach_ctrl"
    }).when("/dimple", {
      templateUrl: "views/dimple/dimple.view.html",
      controller: "dimple_ctrl"
    });
};
