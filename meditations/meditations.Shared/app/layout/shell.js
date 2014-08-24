(function () {
    'use strict';

    var controllerId = 'shell';
    angular.module('app').controller(controllerId, [shell]);

    function shell() {
        var vm = this;

        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();