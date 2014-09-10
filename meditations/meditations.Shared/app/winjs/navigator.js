(function () {
    'use strict';

    var nav = angular.module('navigator', []);

    var serviceId = 'navigator';
    nav.service(serviceId, ['$state', '$rootScope', navigator]);

    // This module/service encapsulates an interop layer to isolate
    // WinJS navigation functionality from the rest of the Angular app.

    function navigator($state, $rootScope) {

        var goBackEvent = 'navigator.goBack';
        var goingBack = false;
        var navHistory = [];
        var service = {
            canGoBack: canGoBack,
            goBack: goBack,
            register: register
        };

        return service;

        function canGoBack() {
            return navHistory.length > 1;
        }

        function goBack(scope) {
            var path;
            var phase = scope.$root.$$phase;

            // The first item in navHistory is home
            if (navHistory.length === 1) { return; }

            goingBack = true;
            navHistory.pop();
            path = navHistory[navHistory.length - 1];
            $state.go(path);

            if (phase !== '$apply' && phase !== '$digest') {
                scope.$apply();
            }
        }

        function register() {
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                if (goingBack) {
                    goingBack = false;
                } else {
                    navHistory.push(toState.name);
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