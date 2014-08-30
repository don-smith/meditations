(function () {
    'use strict';

    var nav = angular.module('navigator', []);

    var serviceId = 'navigator';
    nav.service(serviceId, ['$window', navigator]);

    function navigator($window) {

        var service = {
            goBack: goBack,
            register: function () { }
        };

        return service;

        function goBack(scope) {
            var phase = scope.$root.$$phase;

            $window.history.back();

            if (phase !== '$apply' && phase !== '$digest') {
                scope.$apply();
            }
        }

    }

})();