(function() {
    'use strict';

    angular.module('app').directive('selectOnFocus', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    this.select();
                });
            }
        };
    });

})();