(function () {
    'use strict';

    var controllerId = 'newSession';
    angular.module('app').controller(controllerId, ['$location', '$window', newSession]);

    function newSession($location, $window) {
        var vm = this;
        vm.goHome = function() {
            $location.path('/');
        };
        vm.goBack = function() {
            //setTimeout(function() {
            //    $window.history.back();
            //}, 0);
            $window.history.initPopStateEvent();
        }

        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();