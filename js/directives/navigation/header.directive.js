(function () {
    'use strict';

    angular
        .module('tck')
        .directive('tckHeader', tckHeader);

    tckHeader.$inject = [];

    function tckHeader() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {},
            link: linkFunc,
            templateUrl: 'js/directives/navigation/header.html',
            controller: 'HeaderController',
            controllerAs: 'vm',
            bindToController: true,
        }

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();