(function() {
    'use strict';

    angular.module('app').factory('timer', ['$interval', '$rootScope', timer]);

    function timer($interval, $rootScope) {

        var factory = {
            cleanup: cleanup,
            duration: 0,
            hasStarted: false,
            isCompleted: false,
            isPlaying: false,
            start: start,
            stop: stop
        };
        var remainingMoment;
        var timerPromise;

        if (!moment) {
            throw "Moment.js, a dependency of the timer factory, was not found";
        }

        return factory;

        function checkIfFinished() {
            var timeLeft = remainingMoment.asSeconds();
            var timerDetails = {};
            if (timeLeft > 0) {
                remainingMoment.subtract(1, 'seconds');
                timerDetails.minutes = remainingMoment.minutes();
                timerDetails.seconds = pad(remainingMoment.seconds());
                $rootScope.$broadcast('timer.tick', timerDetails);
            } else {
                $rootScope.$broadcast('timer.complete');
                factory.isCompleted = true;
                stop();
            }
        }

        function cleanup() {
            stop();
            factory.duration = 0;
            factory.hasStarted = false;
            factory.isCompleted = false;
        }

        function pad(num) {
            var padded = num + '';
            padded = padded.length == 1 ? '0' + padded : padded;
            return padded;
        }

        function start(minutes) {
            if (minutes) {
                factory.duration = minutes;
                remainingMoment = moment.duration(minutes * 60 * 1000);
            }
            timerPromise = $interval(function() {
                checkIfFinished();
            }, 1000);
            factory.hasStarted = true;
            factory.isPlaying = true;
        }

        function stop() {
            $interval.cancel(timerPromise);
            factory.isPlaying = false;
        }

    }

})();