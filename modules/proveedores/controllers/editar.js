angular.module('gepro.proveedores')
    .controller('ProveedoresEditarController', function (AuthService, $scope, $http, $state, $stateParams) {

      var apiUrl = 'https://adr-utn.herokuapp.com/api/v1/';
      AuthService.isLogged().then(function () {
        init();  
      }, function() {
        $state.go('login');
      });  

      $scope.editar = function () {
        $http({
          method: 'PUT',
          url: apiUrl+ 'proveedores/' + $stateParams.proveedorId,
          data: $scope.proveedor
        }).then(function () {
          $state.go('proveedores');
        });
      }

      var init = function () {
        $http({
          method: 'GET',
          url: apiUrl +'proveedores/' + $stateParams.proveedorId
        }).then(function (response) {
          $scope.proveedor = response.data;
      });
      }
      

    });