(function () {
    'use strict';

    angular
        .module('tck')
        .factory('PatternService', PatternService);

    PatternService.$inject = ['$q', 'lodash'];

    function PatternService ($q, _) {
        var patterns = [
        ];

        var service = {
            get: get,
            getAll: getAll,
        };

        return service

        function get(name) {
            var pattern = _.find(patterns, function (pattern) { return pattern.name === name; });

            if (pattern) {
                return $q(function (resolve) {
                    resolve(pattern);
                });
            } else {
                return getFromServer(name);
            }
        }

        function getFromServer(name) {
            return $q(function (resolve, reject) {
                if (name === 'bob'){
                    resolve({name: 'bob', subtitle: 'The Great'});
                } else {
                    reject("Unknown pattern name");
                }
            })
            .then(function (response) {
                patterns.push(response);
                return response;
            })
            .catch(function (error) {
                throw error;
            });
        }

        function getAll() {

        }
    }
})();