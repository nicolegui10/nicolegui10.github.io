angular.module('gepro.pedidos')
    .controller('PedidosCrearController', function (AuthService, $scope, $http, $state) {

      var apiUrl = 'https://adr-utn.herokuapp.com/api/v1/';
      $scope.options = {};

      AuthService.isLogged().then(function () {
            init();  
          }, function() {
            $state.go('/');
          });

      $scope.pedido = {};
      $scope.pedido.items = [];
      var init = function () {
        $scope.productosNoCargados = true;
        $scope.lineasProducto = [];
        $scope.productoSeleccionado = {};
        $scope.item = {};
        $http({
          method: 'GET',
          url: apiUrl + 'proveedores'
        }).then(function (response) {
          $scope.proveedores = response.data;
        });
      };

      $scope.loadProducts = function () {
        $scope.pedido.proveedorId = $scope.options.selected;
        $scope.productoSeleccionado = {};
        $scope.form.producto.$setPristine();
        $scope.productosNoCargados = false;
        $http({
          method: 'GET',
          url: apiUrl + 'proveedores/'+ $scope.options.selected +'/productos'
        }).then(function (response) {
          $scope.productos = response.data;
        });
      }

      $scope.crear = function () {
        console.log($scope.pedido);
        var result = confirm ("Etas seguro?");
        if (result) {
          $http({
          method: 'POST',
          url: apiUrl + 'pedidos',
          data: $scope.pedido
        }).then(function () {
          $state.go('pedidos');
        });
        }
        
      }

      function updateTotal() {
        $scope.total = 0;
        $scope.lineasProducto.forEach(function (linea) {
          $scope.total += linea.precio * linea.cantidad;
        })
      };

      /*$scope.getDescripcionById = function (id) {
        return $scope.productos.filter(function (producto) {
          return producto.id === id;
        })[0].descripcion;
      };*/


      $scope.agregar = function () {
        var item = {
          productoId: 0,
          cantidad: 0
        }
        $scope.lineasProducto.push(angular.copy($scope.productoSeleccionado.selected));
        console.log($scope.lineasProducto);
        item.productoId = $scope.productoSeleccionado.selected.id;
        item.cantidad = $scope.productoSeleccionado.selected.cantidad;
        $scope.pedido.items.push(item);
        $scope.productoSeleccionado = {};
        $scope.form.producto.$setPristine();
        $scope.form.precio.$setPristine();
        $scope.form.cantidad.$setPristine();
        updateTotal();
      };

      $scope.borrar = function (id) {
        $scope.lineasProducto = $scope.lineasProducto.filter(function (selected) {
          return selected.id !== id;
        });
        $scope.pedido.items = $scope.pedido.items.filter(function (item) {
          return item.productoId !== id;
        });
        updateTotal();
      };     

    });