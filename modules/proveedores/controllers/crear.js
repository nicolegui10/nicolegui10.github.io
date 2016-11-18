angular.module('gepro.proveedores')
    .controller('ProveedoresCrearController', function (AuthService, $scope, $http, $state) {

      var apiUrl = 'https://adr-utn.herokuapp.com/api/v1/';
      AuthService.isLogged().then(function () {
          }, function() {
            $state.go('login');
      });  

      $scope.proveedor = {};


      $scope.crear = function () {
        $http({
          method: 'POST',
          url: apiUrl + 'proveedores',
          data: $scope.proveedor
        }).then(function () {
          $state.go('proveedores');
        });
      };
    });