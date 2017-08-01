(function () {
    'use strict';

    angular
        .module('tck')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['NavigationService'];

    function HeaderController(navigationService) {
        var vm = this;

        // Functions
        // vm.slideMenuIn = slideMenuIn;
        // vm.slideMenuOut = slideMenuOut;

        // Variables
        vm.pages = [];
        // vm.showMenu = false;

        // Constructor
        activate();

        function activate() {
            vm.pages = navigationService.pages;
        }

        // function slideMenuIn() {
        //     vm.showMenu = true;
        // }

        // function slideMenuOut() {
        //     vm.showMenu = false;
        // }
    }
})();