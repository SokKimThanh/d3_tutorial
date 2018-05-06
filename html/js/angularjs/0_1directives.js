
d3app
  .directive("d3App", d3_app_directive)
  .directive("topContainer", top_container_directive)
  .directive("sidebarMenu", sidebar_menu_directive)
  .directive("pageContent", page_content_directive)
  .directive("footerContainer", footer_container_directive)
  .directive('svgKeys', svgkey_directive)
  .directive('myKey', mykey_directive)
  .directive('svgMap', ['$compile', function ($compile) {
    return {
      restrict: 'A',
      templateUrl: 'w3images/phuoctien.svg',
      link: function (scope, element, attrs) {

      }
    }
  }]).directive("myDirective", myDirective)
  .directive('iCheck', function ($timeout, $parse) {
    return {
      restrict: 'EA',
      link: function ($scope, element, $attrs) {
        return $timeout(function () {
          var ngModelGetter, value;
          ngModelGetter = $parse($attrs['ngModel']);
          value = $parse($attrs['ngValue'])($scope);
          return $(element).iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
            increaseArea: '20%'
          }).on('ifChanged', function (event) {
            if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
              $scope.$apply(function () {
                return ngModelGetter.assign($scope, event.target.checked);
              });
            }
            if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
              return $scope.$apply(function () {
                return ngModelGetter.assign($scope, value);
              });
            }
          });
        });
      }
    };
  });