angular.module('gepro.pedidos')
    .controller('PedidosVerController', function (AuthService, $scope, $http, $state, $stateParams, $window) {

      var apiUrl = 'https://adr-utn.herokuapp.com/api/v1/';
    	AuthService.isLogged().then(function () {
            init();  
          }, function() {
            $state.go('login');
          }); 

    var init = function () {	
      $http({
        method: 'GET',
        url: apiUrl + 'pedidos/' + $stateParams.pedidoId
      }).then(function (response) {
        $scope.pedido = response.data;
        console.log($scope.pedido);
      });
    }

    $scope.finalizarPedido = function() {
        $http({
          method: 'PUT',
          url: apiUrl + 'pedidos/' + $stateParams.pedidoId
        }).then(function (response) {
          $state.reload();
        });
      }

      $scope.eliminarPedido = function () {
        var result = confirm ("¿Estas seguro que desea eliminar este Pedido?");
        if(result){
          $http({
          method: 'DELETE',
          url: apiUrl + 'pedidos/' + $stateParams.pedidoId
        }).then(function (response) {
          $state.reload();
        });
        }
      }
     

    });