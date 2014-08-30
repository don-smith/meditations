(function () {
    'use strict';

    var app = angular.module('app');

    var serviceId = 'interop';
    app.service(serviceId, ['$location', '$rootScope', '$window', interop]);

    function interop($location, $rootScope, $window) {

        // With AngularJS, the recommended way to navigate back, is to use
        // $window.history.back() Unfortunately, on Windows Phone, this happens
        // faster than Angular expects it, causing it to become confused. The 
        // existing work-arounds are either too invasive (changing AngularJS
        // source code) or hacks (wrapping the call in a setTimeout). This fix
        // attempts to remain external to Angular, and easy to remove once fixed.
        // Each time the location changes, the path is added to historyStack. 
        // The hardware button fires an event ...

        var service = {
            registerNavigation: registerNavigation
        };

        return service;

        function registerNavigation() {
            registerWatchers();
            registerBackClickHandler();
        }

        function registerWatchers() {
            $rootScope.$on('$locationChangeStart', function(event, next, current) {
                if (false) {
                    return event.defaultPrevented = true;
                }
            });
            $rootScope.$on('$locationChangeSuccess', function(event, next, current) {
                console.log('location changed to' + next);
            });
            $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
                var path = '#' + $location.path();
                //WinJS.Navigation.navigate(path);
                console.log('route changed to ' + next.$$route.originalPath);
            });
        }

        function registerBackClickHandler() {
            WinJS.Application.onbackclick = function() {
                //setTimeout(function() {
                //    $window.history.back();
                //}, 0);
                $window.history.popstate();
                return true;
            };
        }

    }
})();