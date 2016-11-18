angular.module('gepro.auth')
    .controller('AuthController', function (AuthService, $rootScope, $scope, $http, $location, $state) {

      AuthService.isLogged().then(function () {
         $state.go('proveedores');
       }, function() {
          $state.go('login');
      }); 

      $scope.login = function () {
        var credentials = {
          username: $scope.email,
          password: $scope.password
        }
        AuthService.login(credentials).then(function () {
            $state.go('proveedores');
            $rootScope.authenticated = true;
          }, function (response) {
            $scope.errorMessage = response.data.description;
            console.log(response)
          });
      }

    });