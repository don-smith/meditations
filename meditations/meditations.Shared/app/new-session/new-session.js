(function () {
    'use strict';

    var controllerId = 'newSession';
    angular.module('app').controller(controllerId, ['$rootScope', '$scope', 'timer', newSession]);

    function newSession($rootScope, $scope, timer) {
        var vm = this;

        vm.displayDuration = 20;
        vm.displayMinutes = '';
        vm.displaySeconds = '';
        vm.hasStarted = false;
        vm.isCompleted = false;
        vm.isPlaying = false;
        vm.toggleTimer = toggleTimer;

        registerEventHandlers();

        function registerEventHandlers() {
            $rootScope.$on('timer.tick', function(event, timerDetails) {
                vm.displayMinutes = timerDetails.minutes;
                vm.displaySeconds = timerDetails.seconds;
                $scope.$apply();
            });

            $rootScope.$on('timer.complete', function(event) {
                vm.isCompleted = true;
                $scope.$apply();
                //saveSession().then(function() {
                //    $scope.$apply();
                //});
            });

            $scope.$on('$destroy', function() {
                timer.cleanup();
            });
        }

        function saveSession() {
            //dataservice.savesession(duration).then(function() {
            //    vm.sessionSaved = true;
            //});
        }

        function startTimer() {
            if (timer.hasStarted) {
                timer.start(); // restart
            } else { // start for the first time
                timer.start(vm.displayDuration);
            }
            vm.hasStarted = timer.hasStarted;
        }

        function toggleTimer () {
            if (timer.isPlaying) {
                timer.stop();
            } else {
                startTimer();
            }
            // toggle
            vm.isPlaying = timer.isPlaying;
            //$scope.$apply();
        };
    };
})();