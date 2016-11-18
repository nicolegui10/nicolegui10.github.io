angular.module('gepro.productos')
    .controller('ProductosEditarController', function (AuthService, $scope, $http, $location, $routeParams) {

      
      AuthService.isLogged().then(function () {
        init();
      }, function() {
          $location.path('/');
      }); 

      $scope.editar = function () {
        $http({
          method: 'PATCH',
          url: 'api/productos/' + $routeParams.productoId,
          data: $scope.producto
        }).then(function () {
          $location.path('productos');
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

      $scope.limpiar= function () {
        $scope.errors = undefined;
      }

      var init = function() {
        $http({
        method: 'GET',
        url: 'api/productos/' + $routeParams.productoId
        }).then(function (response) {
          $scope.producto = response.data;
        });
      }
      

    });