'use strict';

angular.module('gepro.services.http')
    .service('HttpAuthService', [
      '$http',
      function ($http) {
        return {
          get: function () {
            return $http({
              method: 'GET',
              url: "https://adr-utn.herokuapp.com/api/v1/me"
            });
          },
          login: function (request) {
            return $http({
              method: 'POST',
              url: "https://adr-utn.herokuapp.com/api/login/",
              data: request,
              headers: {'Content-Type': 'application/json'}
            });
          }

    };
}]);       