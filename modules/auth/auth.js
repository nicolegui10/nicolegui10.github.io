angular.module('gepro.auth', [])
    .config([
      '$stateProvider',
      function ($stateProvider) {
        $stateProvider
            .state('login', {
              url: '/login',
              templateUrl: 'modules/auth/views/login.html',
              controller: 'AuthController'
            });
      }]);