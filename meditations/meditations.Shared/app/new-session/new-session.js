(function () {
    'use strict';

    var controllerId = 'newSession';
    angular.module('app').controller(controllerId, [newSession]);

    function newSession() {
        var vm = this;

        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();