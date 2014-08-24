"use strict";
/* jshint strict: false */
/* jshint -W097 */

var azureServices = angular.module('azureServicesModule', []);

azureServices.factory('AzureMobileServices', ['$q', function ($q) {
    return new function () {
        var client = new WindowsAzure.MobileServiceClient("[your azure mobile web service url here]", "[your azure mobile web service key here]");

        this.cleanAngularObject = function (angularObject) {
            var cleanObject = {};
            var keyArray = Object.keys(angularObject);
            for (var i = 0; i < keyArray.length; ++i) {
                if (!(/^\$/.test(keyArray[i]))) {
                    cleanObject[keyArray[i]] = angularObject[keyArray[i]];
                }
            }
            return cleanObject;
        }

        this.create = function (table, newObj) {
            var deferred = $q.defer();
            var queryTable = client.getTable(table);

            queryTable.insert(newObj).then(function (returnObj) {
                deferred.resolve(returnObj);
            },
            function (error) {
                deferred.reject("Error attempting to create new object.  Result: " + error);
            });

            return deferred.promise;
        };

        this.read = function (table, filter) {
            var deferred = $q.defer();
            var queryTable = client.getTable(table);

            if (filter !== null && filter !== "") {
                var query = queryTable.where(filter);
                query.read().done(function (resultObj) {
                    deferred.resolve(resultObj);
                }, function (error) {
                    deferred.reject("Error attempting to read from Mobile Services. Result: " + error);
                });
            } else {
                queryTable.read().done(function (resultObj) {
                    deferred.resolve(resultObj);
                },
                function (error) {
                    deferred.reject("Error attempting to read from Mobile Services. Result: " + error);
                });
            }

            return deferred.promise;
        };

        this.update = function (table, item) {
            var deferred = $q.defer();
            var queryTable = client.getTable(table);

            queryTable.update(this.cleanAngularObject(item)).then(function (returnObj) {
                deferred.resolve(returnObj);
            },
            function (error) {
                deferred.reject("Error attempting to update object.  Result: " + error);
            });

            return deferred.promise;
        };

        this.delete = function (table, item) {
            var deferred = $q.defer();
            var queryTable = client.getTable(table);

            queryTable.del(item).then(function () {
                deferred.resolve();
            }, function (error) {
                deferred.reject("Error attempting to delete object.  Result: " + error)
            });

            return deferred.promise;
        };
    }
}]);