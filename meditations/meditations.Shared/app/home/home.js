(function () {
    'use strict';

    var controllerId = 'home';
    angular.module('app').controller(controllerId, ['$location', home]);

    function home($location) {
        var vm = this;

        vm.goTo = function(path) {
            $location.path(path);
        };

        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();