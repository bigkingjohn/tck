(function () {
    'use strict';

    angular
        .module('tck')
        .factory('NavigationService', NavigationService);

        NavigationService.$inject = ['$state', '$window'];

        function NavigationService ($state, $window) {
            var service = {
                pages: [
                    {
                        title: "home",
                        goto: function () { goToState("home"); },
                    },
                    {
                        title: "blog",
                        goto: function () { goToState("blog"); },
                    },
                    {
                        title: "patterns",
                        goto: function () { goToState("patterns"); },
                    },
                    {
                        title: "books",
                        goto: function () { goToState("books"); },
                    },
                ],
                socialButtons: [
                    {
                        url: "https://www.instagram.com/explore/tags/heartonmysleeveknits",
                        image: "images/button-instagram.png"
                    },
                    {
                        url: "https://www.facebook.com/search/top/?q=%23heartonmysleeveknits",
                        image: "images/button-facebook.png"
                    },
                    {
                        url: "https://www.pinterest.com/tincanknits/heart-on-my-sleeve",
                        image: "images/button-pintrest.png"
                    },
                    {
                        url: "https://twitter.com/search?q=heartonmysleeveknits&src=typd",
                        image: "images/button-twitter.png"
                    },
                    {
                        url: "http://www.ravelry.com/groups/tin-can-knits",
                        image: "images/button-ravelry.png"
                    },
                ]
            }

            return service;

            function goToState(newState) {
                $state.go(newState);
            }

            function goToSite(newSite) {
                $window.location.href = newSite;
            }
        }
})();