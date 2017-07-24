(function () {
    'use strict';

    angular
        .module('tck')
        .controller('PatternController', PatternController);

    PatternController.$inject = ['$stateParams'];

    function PatternController($stateParams) {
        var vm = this;

        // Functions

        // Variables
        vm.name = '';
        vm.subtitle = '';
        vm.beautyText = '';
        vm.yarns = {};
        vm.needles = {};
        vm.book = '';
        vm.relatedPatterns = '';
        vm.purchaseLink = '';
        vm.ravelryUrl = '';
        vm.ravelryButton = '';
        vm.type = '';
        vm.recommendedYarnWeight = '';
        vm.attributes = '';
        vm.construction = '';
        vm.relatedTutorials = '';
        vm.difficulty = '';
        vm.launchDate = '';
        vm.priceCategory = '';
        vm.popularity = '';
        vm.blogPosts = '';
        vm.notes = '';
        vm.descriptionType = '';

        // Constructor
        activate();

        function activate() {
            console.log('pattern');
            vm.name = $stateParams.name
            console.log($stateParams.filter);
        }
    }
})();