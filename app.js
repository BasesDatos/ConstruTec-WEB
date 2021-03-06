var regUsers = angular.module("regUser",["ngRoute"]);
var proyectoE = angular.module("proyectos",["ngRoute"]);



proyectoE.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            when('/', {
               templateUrl: 'principal.html',
               controller: 'proyectoController'
            }).
            when('/proyectos', {
               templateUrl: 'proyecto.html',
               controller: 'proyectoController'
            }).
            when('/regUserIng', {
               templateUrl: 'regUserIng.html',
               controller: 'RegUserController'
            }).
            when('/etapas', {
               templateUrl: 'etapas.html',
               controller: 'etapaController'
            }).
            when('/regUserRegistered',{
                templateUrl:'regUserRegistered.html',
                controller:'regUserRegisteredController'
            }).
            when('/Login',{
                templateUrl:'Login.html',
                controller:'loginUserController'
            }).
            when('/products', {
               templateUrl: 'products.html',
               controller: 'listaProductosController'
            }).
            otherwise({
               redirectTo: '/'
            });
         }]);



  
     