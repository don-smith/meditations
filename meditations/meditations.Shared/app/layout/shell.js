(function () {
    'use strict';

    var controllerId = 'shell';
    angular.module('app').controller(controllerId, ['$location', '$rootScope', '$scope', 'interop', shell]);

    function shell($location, $rootScope, $scope, interop) {
        var vm = this;

        interop.registerNavigation();
        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();