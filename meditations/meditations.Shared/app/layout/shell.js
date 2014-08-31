(function () {
    'use strict';

    var controllerId = 'shell';
    angular.module('app').controller(controllerId, ['navigator', shell]);

    function shell(navigator) {

        navigator.register();
        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();