angular.module('gepro.pedidos')
    .controller('PedidosListarController', function (AuthService, $scope, $http, $timeout, $state) {
      var apiUrl = 'https://adr-utn.herokuapp.com/api/v1/';
      AuthService.isLogged().then(function () {
            init();  
          }, function() {
            $state.go('/');
          });  

      var init = function () {
        $http({
          method: 'GET',
          url: apiUrl + 'pedidos'
        }).then(function (response) {
          $scope.pedidos = response.data;
          console.log($scope.pedidos);
        });
      };

      $scope.finalizarPedido = function(id) {
        $http({
          method: 'PUT',
          url: apiUrl + 'pedidos/' + id
        }).then(function (response) {
          $state.reload();
        });
      }

      $scope.eliminarPedido = function (id) {
        var result = confirm ("¿Estas seguro que desea eliminar este Pedido?");
        if(result){
          $http({
          method: 'DELETE',
          url: apiUrl + 'pedidos/' + id
        }).then(function (response) {
          $state.reload();
        });
        }
      }

    });