(function () {
    'use strict';

    var controllerId = 'shell';
    angular.module('app').controller(controllerId, ['navigator', shell]);

    //TODO: Re-evaluate the need for this file

    function shell() {

        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();