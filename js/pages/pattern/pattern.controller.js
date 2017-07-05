(function () {
    'use strict';

    angular
        .module('tck')
        .controller('PatternController', PatternController);

    PatternController.$inject = [];

    function PatternController() {
        var vm = this;

        // Functions

        // Variables

        // Constructor
        activate();

        function activate() {
            console.log('pattern');
        }
    }
})();