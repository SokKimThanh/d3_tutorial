var myDirectiveCtrl = function (scope, element, attributes) {
    let svg = d3.select(element[0])
        .append('svg');
    svg.append('text')
        .text('CLICK ME')
        .attr('y', '30')
        .attr('cursor', 'pointer')
        .attr('ng-click', 'showAlert(\'clicked\')');
    let compiledSvg = $compile(svg.node())(scope);
    element[0].children[0].replaceWith(compiledSvg[0]);
    scope.showAlert = function (message) {
        alert(message);
    };
}