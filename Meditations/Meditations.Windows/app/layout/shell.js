(function () {
    'use strict';

    var controllerId = 'shell';
    angular.module('app').controller(controllerId, ['$scope', 'navigator', shell]);

    function shell($scope, navigator) {
        var vm = this;
        vm.canGoBack = navigator.canGoBack;
        vm.goBack = function() {
            navigator.goBack($scope);
        }
    };

})();