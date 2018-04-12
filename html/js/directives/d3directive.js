var d3_app_directive = () => {
    return {
        restrict: "E",
        templateUrl: "views/d3app.index.html",
        controller: ["$scope", d3_app_ctrl]
    };
}
var top_container_directive = () => {
    return {
        restrict: "E",
        templateUrl: "views/top_container/top_container.index.html",
        controller: ["$scope", top_container_ctrl]
    };
}
var sidebar_menu_directive = () => {
    return {
        restrict: "E",
        templateUrl: "views/sidebar_menu/sidebar_menu.index.html",
        controller: ["$scope", sidebar_menu_ctrl]
    };
}
var page_content_directive = () => {
    return {
        restrict: "E",
        templateUrl: "views/page_content/page_content.index.html",
        controller: ["$scope", page_content_ctrl]
    };
}