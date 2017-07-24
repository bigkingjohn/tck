(function () {
    'use strict';

    angular
        .module('tck')
        .controller('SearchController', SearchController);

    SearchController.$inject = [];

    function SearchController() {
        var vm = this;

        // Functions

        // Variables
        vm.results = [];
        vm.searchInput = '';

        // Constructor
        activate();

        function activate() {
            console.log('search');
        }
    }
})();