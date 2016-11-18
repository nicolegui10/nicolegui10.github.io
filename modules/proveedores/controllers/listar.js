angular.module('gepro.proveedores')
    .controller('ProveedoresListarController', function (AuthService, $scope, $http, $timeout, $location) {

      var apiUrl = 'https://adr-utn.herokuapp.com/api/v1/';
      AuthService.isLogged().then(function () {
        init();  
      }, function() {
          $location.path('/');
      });  

      var init = function () {
       $http({
          method: 'GET',
          url: apiUrl + 'proveedores'
        }).then(function (response) {
          console.log(response);
          $scope.proveedores = response.data;
        });
      };

      $scope.eliminar = function (id) {
        var result = confirm ("¿Esta seguro que desea eliminar este proveedor?");
        if(result){
          $http({
          method: 'DELETE',
          url: apiUrl + 'proveedores/' + id
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