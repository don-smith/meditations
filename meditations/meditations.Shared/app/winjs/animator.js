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

    app.animation('.enter-page', function() {
        return {
            enter: function(element, done) {
                WinJS.UI.Animation.enterPage(element[0]).then(done);
            },
            leave: function(element, done) {
                //WinJS.UI.Animation.exitPage(element[0]).then(done);
                done();
            }
        }
    });
})();
