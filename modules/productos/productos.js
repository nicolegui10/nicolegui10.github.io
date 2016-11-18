angular.module('gepro.productos', [])
    .config([
      '$stateProvider',
      function ($stateProvider) {

        $stateProvider
            .state('productos', {
              url: '/productos',
              controller: 'ProductosListarController',
              templateUrl: 'modules/productos/views/listar.html'
            })
            .state('crear-producto', {
              url: '/productos/crear',
              controller: 'ProductosCrearController',
              templateUrl: 'modules/productos/views/crear.html'
            })
            .state('editar-producto', {
              url: '/productos/:productoId/editar',
              controller: 'ProductosEditarController',
              templateUrl: 'modules/productos/views/editar.html'
            });
      }]);