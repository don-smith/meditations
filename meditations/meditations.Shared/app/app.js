(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.run(['$route', function () {
        // Include $route to kick start the router.
    }]);
})();