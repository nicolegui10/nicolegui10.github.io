angular.module('gepro').factory('Authorization',
    function ($q, $location) {

      return {
        responseError: function (rejection) {

          if (rejection.status === 400) {
            $location.path('/login');
          }

          return $q.reject(rejection);
        }
      };

    });