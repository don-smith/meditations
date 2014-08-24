(function () {
    'use strict';

    var controllerId = 'home';
    angular.module('app').controller(controllerId, [home]);

    function home() {
        var vm = this;

        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();