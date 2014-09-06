(function() {
    'use strict';

    var app = angular.module('app');

    app.animation('.turnstile-animation', function() {
        return {
            enter: function(element, done) {
                WinJS.UI.Animation.turnstileForwardIn(element[0]).then(done);
            },
            leave: function(element, done) {
                done();
            }
        }
    });

})();
