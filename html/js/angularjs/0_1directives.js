
d3app
    .directive("d3App", d3_app_directive)
    .directive("topContainer", top_container_directive)
    .directive("sidebarMenu", sidebar_menu_directive)
    .directive("pageContent", page_content_directive)
    .directive('svgKeys', svgkey_directive)
    .directive('myKey', mykey_directive)
    .directive('svgMap', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            templateUrl: 'w3images/phuoctien.svg',
            link: function (scope, element, attrs) {

            }
        }
    }]).directive("myDirective", myDirective);