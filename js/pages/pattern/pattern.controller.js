(function () {
    'use strict';

    angular
        .module('tck')
        .controller('PatternController', PatternController);

    PatternController.$inject = ['$stateParams', 'PatternService'];

    function PatternController($stateParams, patternService) {
        var vm = this;

        // Functions

        // Variables
        vm.pattern = {};
        // vm.pattern.name = '';
        // vm.pattern.subtitle = '';
        // vm.pattern.beautyText = '';
        // vm.pattern.yarns = {};
        // vm.pattern.needles = {};
        // vm.pattern.book = '';
        // vm.pattern.relatedPatterns = '';
        // vm.pattern.purchaseLink = '';
        // vm.pattern.ravelryUrl = '';
        // vm.pattern.ravelryButton = '';
        // vm.pattern.type = '';
        // vm.pattern.recommendedYarnWeight = '';
        // vm.pattern.attributes = '';
        // vm.pattern.construction = '';
        // vm.pattern.relatedTutorials = '';
        // vm.pattern.difficulty = '';
        // vm.pattern.launchDate = '';
        // vm.pattern.priceCategory = '';
        // vm.pattern.popularity = '';
        // vm.pattern.blogPosts = '';
        // vm.pattern.notes = '';
        // vm.pattern.descriptionType = '';

        // Constructor
        activate();

        function activate() {
            console.log('pattern');
            patternService.get($stateParams.name)
                .then(function (response) {
                    vm.pattern = response;
                })
                .catch(function (error) {
                    console.log('indicate to user that no pattern with that name exists?  or redirect ', error);
                })
        }
    }
})();