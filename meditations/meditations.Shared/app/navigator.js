(function () {
    'use strict';

    var nav = angular.module('navigator', []);

    var serviceId = 'navigator';
    nav.service(serviceId, ['$location', '$rootScope', navigator]);

    // This module/service encapsulates an interop layer to isolate
    // WinJS navigation functionality from the rest of the Angular app.

    function navigator($location, $rootScope) {

        var goBackEvent = 'navigator.goBack';
        var goingBack = false;
        var navHistory = [];
        var service = {
            goBack: goBack,
            register: register
        };

        return service;

        function goBack(scope) {
            var path;
            var phase = scope.$root.$$phase;

            // the first item is the nav to the first screen
            if (navHistory.length === 1) { return; }

            goingBack = true;
            navHistory.pop();
            path = navHistory[navHistory.length-1];
            $location.path(path);

            if (phase !== '$apply' && phase !== '$digest') {
                scope.$apply();
            }
        }

        function register() {
            $rootScope.$on('$routeChangeSuccess', function (event, next) {
                if (goingBack) {
                    goingBack = false;
                } else {
                    navHistory.push(next.$$route.originalPath);
                }
            });

            WinJS.Application.onbackclick = function() {
                var doNotBackOutOfApp = navHistory.length !== 1;
                $rootScope.$broadcast(goBackEvent);
                return doNotBackOutOfApp;
            };

            $rootScope.$on(goBackEvent, function(event) {
                goBack(event.targetScope);
            });
        }
    }

})();