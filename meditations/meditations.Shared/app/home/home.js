(function () {
    'use strict';

    var controllerId = 'home';
    angular.module('app').controller(controllerId, ['$location', home]);

    function home($location) {
        var vm = this;
        vm.goToNewSession = function() {
            $location.path('/new-session');
        };

        activate();

        function activate() {
            //common.activateController([], controllerId);
        }

    };
})();