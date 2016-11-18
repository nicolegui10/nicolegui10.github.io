angular.module('gepro.services.interceptors')
    .factory('Authorization', [
      '$window',
      function($window) {
        return {
          request: function($config) {
            if ($window.localStorage.getItem("token") != null && $config.url.indexOf('api') >= 0 ) {
              console.log($config);
              $config.headers["Accept"] = 'application/json';
              $config.headers["Authorization"] = 'Bearer ' + $window.localStorage.getItem("token");
            }
              $config.headers["X-UTN-API-Key"] = 'UTN10590E8C8N2E482FB37A254275C312FD';
            return $config;
          }
        };
      }
  ]);