(function () {
    'use strict';

    var controllerId = 'appBar';
    angular.module('app').controller(controllerId, [appBar]);

    function appBar() {

        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();