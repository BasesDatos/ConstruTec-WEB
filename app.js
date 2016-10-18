var regUsers = angular.module("regUser",[]);
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
            when('/newEtapa', {
               templateUrl: 'newEtapa.html',
               controller: 'etapaController'
            }).
            otherwise({
               redirectTo: '/'
            });
         }]);

  
     