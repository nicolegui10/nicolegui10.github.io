angular.module('gepro.productos')
    .controller('ProductosListarController', function (AuthService, $scope, $http, $timeout, $state) {

      var apiUrl = 'https://adr-utn.herokuapp.com/api/v1/';
      AuthService.isLogged().then(function () {
            init();  
          }, function() {
            $state.go('login');
      });  

      var init = function () {
        $http({
          method: 'GET',
          url: apiUrl + 'productos'
        }).then(function (response) {
          $scope.productos = response.data;
        });
      };  


      $scope.eliminar = function (id) {
        var result = confirm("¿Estas seguro que desea eliminar este producto?");
        if(result) {
          $http({
          method: 'DELETE',
          url: apiUrl + 'productos/' + id,
        }).then(function (response) {
          init();
        }, function () {
          $scope.deleteError = true;
          $timeout(function () {
            $scope.deleteError = false;
          }, 5000);
        });
        }
        
      };

    });