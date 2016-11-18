angular.module('gepro.productos')
    .controller('ProductosCrearController', function (AuthService, $scope, $http, $location, $state) {

      $scope.options = {};
      var apiUrl = 'https://adr-utn.herokuapp.com/api/v1/';

      AuthService.isLogged().then(function () {
          init();
      }, function() {
            $location.path('/');
      }); 

      $scope.producto = {};

      $scope.crear = function () {
        $scope.producto.proveedorId = $scope.options.selected;
        $http({
          method: 'POST',
          url: apiUrl + 'productos',
          data: $scope.producto
        }).then(function () {
          $state.go('productos');
        }, function (response) {
          if (response.status === 422) {
            $scope.errors = response.data;
          }
          for (var index in response.data) {
            $scope.errors[index] = response.data[index][0];
            $scope.producto[index] = '';
          }
        });
      }

      
      

      var init  = function () {
        $http({
          method: 'GET',
          url: apiUrl + 'proveedores'
        }).then(function (response) {
          console.log(response);
          $scope.proveedores = response.data;
        });


      }

      $scope.limpiar= function () {
        $scope.errors = undefined;
      }

    });