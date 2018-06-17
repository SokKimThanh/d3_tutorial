var configuration = function ($routeProvider, $qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $routeProvider
    .when("/", {
      templateUrl: "views/page_content/page_content.index.html",
      controller: "page_content_ctrl"
    }).when("/basic", {
      templateUrl: "views/basic/basic.view.html",
      controller: "basic_ctrl"
    }).when("/polygon", {
      templateUrl: "views/polygon/polygon.view.html",
      controller: "polygon_ctrl"
    }).when("/circle", {
      templateUrl: "views/circle/circle.view.html",
      controller: "circle_ctrl"
    }).when("/map_location", {
      templateUrl: "views/map_location/map_location.view.html",
      controller: "map_location_ctrl"
    }).when("/trac_nghiem_tinh_cach", {
      templateUrl: "views/tracnghiemtinhcach/tntc.view.html",
      controller: "trac_nghiem_tinh_cach_ctrl"
    }).when("/dimple", {
      templateUrl: "views/dimple/dimple.view.html",
      controller: "dimple_ctrl"
    }).when("/modal", {
      templateUrl: "views/ModalDemoCtrl/modaldemo.view.html",
      controller: "ModalDemoCtrl"
    }).when("/udacity_retain", {
      templateUrl: "views/UdacityRetain/udacity_retain.view.html",
      controller: "udacity_retain_ctrl"  
    }).when("/udacity_attendance", {
      templateUrl: "views/UdacityAttendance/udacity_attendance.view.html",
      controller: "udacity_attendance_ctrl" 
    }).when("/cung_hoang_dao", {
      templateUrl: "views/cung_hoang_dao/cung_hoang_dao.view.html",
      controller: "cung_hoang_dao_ctrl" 
    })
};
