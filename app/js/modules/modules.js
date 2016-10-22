regUsers.controller('RegUserController',function($scope){
    $scope.nombre="weqr";
    $scope.pApellido="hfahsdkfjhasdkfh";
    $scope.sApellido="";
    $scope.tel="";
    $scope.contrasena="";
    $scope.cedula="";
});



proyectoE.controller("listaProductosController",function($scope){
    
    $scope.hideElements0 = false;
    $scope.hideElements1 = false;
    $scope.hideElements2 = false;
    $scope.hideElements3 = false;
    $scope.hideElements4 = false;
    $scope.hideElements5 = false;
    $scope.hideElements6 = false;
    $scope.hideElements7 = false;
    $scope.hideElements8 = false;
    $scope.hideElements9 = false;
    $scope.hideElements10 = false;
    $scope.all = false;
    
    $scope.lProducts = [{name : 'Brochas para pintar',id : 'epa-100',stock: '789',categoria: 'Paredes'},
                        {name : 'Cintas adhesivas',id : 'epa-101',stock: '52',categoria: 'Trabajo Preliminar'},
                        {name : 'Espatulas',id : 'epa-102',stock: '867',categoria: 'Trabajo Preliminar'},
                        {name : 'Pegamentos',id : 'epa-103',stock: '632',categoria: 'Pisos'},
                        {name : 'Pinturas',id : 'epa-104',stock: '987',categoria: 'Paredes'},
                        {name : 'Pistolas para pintar',id : 'epa-105',stock: '321',categoria: 'Paredes'},
                        {name : 'Rodillos con mangos',id : 'epa-106',stock: '2952',categoria: 'Paredes'},
                        {name : 'Accesorios para griferias',id : 'epa-107',stock: '12137',categoria: 'Instalacion Pluvial'},
                        {name : 'Conexiones galvanizadas',id : 'epa-108',stock: '7610',categoria: 'Instalacion Pluvial'},
                        {name : 'Extencione para tuberias',id : 'epa-109',stock: '11280',categoria: 'Instalacion Pluvial'},
                        {name : 'Fregadero',id : 'epa-110',stock: '4328',categoria: 'Instalacion Pluvial'},
                        {name : 'Griferia',id : 'epa-111',stock: '3264',categoria: 'Instalacion Pluvial'},
                        {name : 'Medidor de agua',id : 'epa-112',stock: '10976',categoria: 'Instalacion Pluvial'},
                        {name : 'Manguera con pistola',id : 'epa-113',stock: '147',categoria: 'Instalacion Pluvial'},
                        {name : 'Rejillas',id : 'epa-114',stock: '4644',categoria: 'Escaleras'},
                        {name : 'Lampara incandecente',id : 'epa-115',stock: '643',categoria: 'Instalacion Electrica'},
                        {name : 'Lampara fluorecente',id : 'epa-116',stock: '4328',categoria: 'Instalacion Electrica'},
                        {name : 'Lampara de escritorio',id : 'epa-117',stock: '12083',categoria: 'Instalacion Electrica'},
                        {name : 'Ceramica tipo 1',id : 'epa-118',stock: '11048',categoria: 'Pisos'},
                        {name : 'Ceramica tipo 2',id : 'epa-119',stock: '10236',categoria: 'Pisos'},
                        {name : 'Ocre',id : 'epa-120',stock: '9191',categoria: 'Pisos'},
                        {name : 'Fragua',id : 'epa-121',stock: '2928',categoria: 'Pisos'},
                        {name : 'Cabos de madera',id : 'epa-122',stock: '3000',categoria: 'Techos'},
                        {name : 'Cincel',id : 'epa-123',stock: '7842',categoria: 'Cimientos'},
                        {name : 'Cortadora de ceramica',id : 'epa-124',stock: '',categoria: 'Pisos'},
                        {name : 'Corta loza',id : 'epa-125',stock: '7712',categoria: 'Pisos'},
                        {name : 'Cemento Cemex',id : 'epa-126',stock: '4001',categoria: 'Paredes'},
                        {name : 'Block',id : 'epa-127',stock: '1826',categoria: 'Paredes'},
                        {name : 'Perling',id : 'epa-128',stock: '3555',categoria: 'Techos'},
                        {name : 'Toma Corrientes',id : 'epa-129',stock: '736',categoria: 'Instalacion Electrica'},
                        {name : 'Puerta tipo 1',id : 'epa-130',stock: '2390',categoria: 'Puertas'},
                       ];
    /**
        $http.get('').
            success(function(data){
                $scope.lproducts = data;
            });
    */
});


proyectoE.factory('etapaInfo', function() {
  return {
    mensaje: '',
    getValor: function() {
      return this.mensaje;
    },
    setValor: function(msg) {
      this.mensaje = msg;
    }
  };
})


proyectoE.controller('proyectoController',function($scope,$http,etapaInfo){
    $scope.usuario=etapaInfo.mensaje;
    $scope.lProyecto;
    $http.get('http://172.26.105.42:9090/materials/getmaterials').
                success(function(data) {
                    $scope.lProyecto = data;
                });
    
    $scope.setNP=function(name){
        etapaInfo.mensaje=name;
        console.log(etapaInfo.mensaje=name);
        $scope.usuario=etapaInfo.mensaje;
    }
    
});

proyectoE.controller('etapaController',function($scope,etapaInfo){
    $scope.usuario=etapaInfo.getValor();
    $scope.letapas= [{pNombre:"Etapa1",pInicio:"10/11/15",pFin:"23/12/16"},
                    {pNombre:"Etapa2",pInicio:"10/11/15",pFin:"23/12/16"},
                    {pNombre:"Etapa3",pInicio:"10/11/15",pFin:"23/12/16"},
                    {pNombre:"Etapa4",pInicio:"10/11/15",pFin:"23/12/16"}];
    $scope.getNP=function(){
        $scope.usuario=etapaInfo.mensaje;
    }
});
