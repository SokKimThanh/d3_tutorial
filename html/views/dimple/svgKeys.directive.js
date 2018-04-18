var svgKey_ctrl = function (scope, element, attrs) {
    var keys = element[0].querySelectorAll('.boardKeys');
    angular.forEach(keys, function (path, key) {
        var myKey = angular.element(path);
        myKey.attr("myKey", "");
        $compile(myKey)(scope);
    })
}
