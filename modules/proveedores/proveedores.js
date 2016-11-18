angular.module('gepro.proveedores', [])
    .config([
      '$stateProvider',
      function ($stateProvider) {

        $stateProvider
            .state('proveedores', {
              url: '/proveedores',
              controller: 'ProveedoresListarController',
              templateUrl: 'modules/proveedores/views/listar.html',
            })
            .state('crear-proveedor', {
              url: '/proveedores/crear',
              controller: 'ProveedoresCrearController',
              templateUrl: 'modules/proveedores/views/crear.html',
            })
            .state('editar-proveedor', {
              url: '/proveedores/:proveedorId/editar',
              controller: 'ProveedoresEditarController',
              templateUrl: 'modules/proveedores/views/editar.html',
            });
      }]);