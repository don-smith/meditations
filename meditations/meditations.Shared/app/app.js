(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'navigator']);

    app.run(['$route', 'navigator', function () {
        // Include $route to kick start the router.
    }]);
})();