(function () {
    'use strict';

    var app = angular.module('app', ['ngAnimate', 'ui.router', 'navigator']);

    app.run(['$state', 'navigator', function($state, navigator) {
        navigator.register();
        $state.go('home');
    }]);

})();