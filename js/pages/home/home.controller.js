(function () {
    'use strict';

    angular
        .module('tck')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        // Functions

        // Variables

        // Constructor
        activate();

        function activate() {
            console.log('index');
        }
    }
})();