angular
    .module('tck')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'js/pages/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('pattern', {
                url: '/pattern?:name',
                templateUrl: 'js/pages/pattern/pattern.html',
                controller: 'PatternController',
                controllerAs: 'vm'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    });