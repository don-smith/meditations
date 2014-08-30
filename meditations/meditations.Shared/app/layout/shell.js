(function () {
    'use strict';

    var controllerId = 'shell';
    angular.module('app').controller(controllerId, ['$scope', 'navigator', shell]);

    function shell($scope, navigator) {
        var vm = this;

        navigator.register();
        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();