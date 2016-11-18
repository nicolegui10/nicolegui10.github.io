'use strict';

angular.module('gepro.services')
    .service('AuthService', [
        '$rootScope',
        'HttpAuthService',
        '$q',
        '$window',
        function($rootScope, HttpAuthService, $q, $window) {
            return {
            login: function(request) {
            var thisService = this,
              d = $q.defer();

            HttpAuthService.login(request).then(function(response) {
              $window.localStorage.setItem("token", response.headers('X-AUTH-TOKEN'));
              thisService.authenticate().then(function() {
                d.resolve();
              });
            }, function(response) {
              var message = response;
              d.reject(message);
            });

            return d.promise;
          },
          authenticate: function() {
            var d = $q.defer();

            HttpAuthService.get().then(function(response) {
              if (response.data) {
                $rootScope.user = response.data;
                console.log(response);
                d.resolve();
              } else {
                //handle cas redirect when no user is logged
                $rootScope.$broadcast('login:fail');
                d.reject();
              }
            }, function () {
              d.reject();
            });
            return d.promise;
          },
          isLogged: function () {
            var thisService = this,
                d = $q.defer();

            if ($rootScope.user) {
              d.resolve($rootScope.user);
            } else {
              thisService.authenticate().then(function(user) {
                d.resolve(user);
              }, function () {
                d.reject();
              });
            }
            return d.promise;
          },
        }
        }]);