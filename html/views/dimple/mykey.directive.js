var mykeyCtrl = function (scope, element, attrs) {
    scope.elementId = element.attr("id");
    scope.keyClick = function () {
        scope.pressKey(scope.elementId);
    };
    element.attr("ng-click", "keyClick()");
    element.removeAttr("myKey");
    $compile(element)(scope);
}