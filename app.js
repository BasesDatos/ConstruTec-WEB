var regUsers = angular.module("regUser",["ngRoute"]);
var proyectoE = angular.module("proyectos",["ngRoute"]);



proyectoE.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            when('/', {
               templateUrl: 'proyecto.html',
               controller: 'proyectoController'
            }).
            
            when('/etapas', {
               templateUrl: 'etapas.html',
               controller: 'etapaController'
            }).
            when('/products', {
               templateUrl: 'products.html',
               controller: 'listaProductosController'
            }).
            otherwise({
               redirectTo: '/'
            });
         }]);



  
     