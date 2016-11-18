angular.module('gepro.pedidos', [])
    .config([
      '$stateProvider',
      function ($stateProvider) {

        $stateProvider
            .state('pedidos', {
              url:'/pedidos',
              controller: 'PedidosListarController',
              templateUrl: 'modules/pedidos/views/listar.html'
            })
            .state('crear-pedidos', {
              url:'/pedidos/crear',
              controller: 'PedidosCrearController',
              templateUrl: 'modules/pedidos/views/crear.html'
            })
            .state('pedido', {
              url:'/pedidos/:pedidoId',
              controller: 'PedidosVerController',
              templateUrl: 'modules/pedidos/views/ver.html'
            });
      }]);