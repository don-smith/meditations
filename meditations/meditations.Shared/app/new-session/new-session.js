(function () {
    'use strict';

    var controllerId = 'newSession';
    angular.module('app').controller(controllerId, ['$location', '$scope', 'navigator', newSession]);

    function newSession($location, $scope, navigator) {
        var vm = this;

        vm.goHome = function() {
            $location.path('/');
        };

        vm.goBack = function() {
            navigator.goBack($scope);
        }

        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();