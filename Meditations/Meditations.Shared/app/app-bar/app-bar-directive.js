(function () {
    'use strict';

    angular.module('app').directive('appBar', [appBarDirective]);

    function appBarDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/app-bar/app-bar-directive.html'
        };
    };

})();