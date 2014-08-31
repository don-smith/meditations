(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: '/app/home/home.html',
                    title: 'home',
                    settings: {
                        content: 'Home'
                    }
                }
            },
            {
                url: '/repeat-last',
                config: {
                    templateUrl: '/app/home/home.html',
                    //templateUrl: '/app/repeat-last/repeat-last.html',
                    title: 'repeat last',
                    settings: {
                        content: 'Repeat Last'
                    }
                }
            },
            {
                url: '/new-session',
                config: {
                    templateUrl: '/app/new-session/new-session.html',
                    title: 'new session',
                    settings: {
                        content: 'New Session'
                    }
                }
            },
            {
                url: '/presets',
                config: {
                    templateUrl: '/app/home/home.html',
                    //templateUrl: '/app/presets/presets.html',
                    title: 'presets',
                    settings: {
                        content: 'Presets'
                    }
                }
            },
            {
                url: '/history',
                config: {
                    templateUrl: '/app/home/home.html',
                    //templateUrl: '/app/history/history.html',
                    title: 'history',
                    settings: {
                        content: 'History'
                    }
                }
            }
        ];
    }
})();