(function () {
    'use strict';

    var app = angular.module('app');

    // Configure the routes and route resolvers
    app.config(['$stateProvider', routeConfigurator]);
    function routeConfigurator($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/app/home.html'
            })
            .state('repeat-last', {
                url: '/repeat-last',
                templateUrl: '/app/home.html'
                //templateUrl: '/app/repeat-last/repeat-last.html'
            })
            .state('new-session', {
                url: '/new-session',
                templateUrl: '/app/new-session.html'
            })
            .state('presets', {
                url: '/presets',
                templateUrl: '/app/home.html'
                //templateUrl: '/app/presets/presets.html'
            })
            .state('history', {
                url: '/history',
                templateUrl: '/app/home.html'
                //templateUrl: '/app/history/history.html'
            });
    }

})();