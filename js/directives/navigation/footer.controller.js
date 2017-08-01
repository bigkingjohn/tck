(function () {
    'use strict';

    angular
        .module('tck')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['NavigationService'];

    function FooterController(navigationService) {
        var vm = this;

        // Functions

        // Variables
        vm.footerBar = [];
        vm.socialButtons = [];

        // Constructor
        activate();

        function activate() {
            vm.footerBar = navigationService.pages;
            vm.socialButtons = navigationService.socialButtons;
        }
    }
})();