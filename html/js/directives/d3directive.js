var d3_app_directive = () => {
    return {
        restrict: "E",
        templateUrl: "views/d3_app/d3app.index.html",
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
var svgkey_directive = ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'images/keyboard.svg',
        link: svgKey_ctrl
    }
}]
var mykey_directive = ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: true,
        link: mykeyCtrl
    }
}]
var myDirective = function ($compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            let svg = d3.select(element[0])
                .append('svg');
            svg.append('text')
                .text('CLICK ME')
                .attr('y', '30')
                .attr('cursor', 'pointer')
                .attr('ng-click', 'showAlert()');
            $compile(svg.node())(scope);
            // element[0].children[0].replaceWith(compiledSvg[0]);
            scope.showAlert = function () {
                alert("vaoday");
            };
            //Add event listener for 'click' event
            // element[0].children[0].on('click', function (event) {
            //     //Update DOM.      
            //     element[0].children[0].css({
            //         color: 'green'
            //     });
            // });
        }
    }
}
