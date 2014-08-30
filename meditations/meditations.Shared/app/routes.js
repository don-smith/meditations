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
                        nav: 1,
                        content: 'Home'
                    }
                }
            },
            {
                url: '/new-session',
                config: {
                    templateUrl: '/app/new-session/new-session.html',
                    title: 'new session',
                    settings: {
                        nav: 1,
                        content: 'New Session'
                    }
                }
            }
        ];
    }
})();