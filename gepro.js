angular.module('gepro', [
  'ui.router',
  'ngSanitize',
  'ui.select',
  'datePicker',
  'AngularPrint',
  'gepro.services',
  'gepro.components',
  'gepro.productos',
  'gepro.proveedores',
  'gepro.pedidos',
  'gepro.auth'
]).run([
      '$rootScope',
      '$window',
      '$state',
      function ($rootScope, $window, $state) {
        $rootScope.reload = function() {
           $state.reload();
         };
}])
.config([
      '$httpProvider',
      '$urlRouterProvider',
      function($httpProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/login');


        $httpProvider.interceptors.push('Authorization');    
}]);
