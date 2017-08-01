(function () {
    'use strict';

    angular
        .module('tck')
        .directive('tckFooter', tckFooter);

    tckFooter.$inject = [];

    function tckFooter() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {},
            link: linkFunc,
            templateUrl: 'js/directives/navigation/footer.html',
            controller: 'FooterController',
            controllerAs: 'vm',
            bindToController: true,
        }

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();