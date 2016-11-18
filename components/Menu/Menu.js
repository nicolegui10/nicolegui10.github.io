angular.module('gepro.components', [])
    .directive('geproMenu', function (AuthService, $rootScope, $location, $window, $state) {
      return {
        templateUrl: 'components/Menu/Menu.html',
        restrict: 'E',
        scope: true,
        replace: true,
        link: function (scope, element) {

          AuthService.isLogged().then(function () {
            scope.authenticated = true;  
          }, function() {
            $state.go('login');
          });  

          scope.logout = function() {
              $rootScope.authenticated = false;  
              delete ($rootScope.user);
              $window.localStorage.removeItem("token");
              $state.go('login');
              $rootScope.reload();
          }

        }
      }
    });
