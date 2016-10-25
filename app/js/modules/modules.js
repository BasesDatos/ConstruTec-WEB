regUsers.controller('RegUserController',function($scope){
    $scope.nombre="weqr";
    $scope.pApellido="hfahsdkfjhasdkfh";
    $scope.sApellido="";
    $scope.tel="";
    $scope.contrasena="";
    $scope.cedula="";
});

proyectoE.constant("miServicioIP","http://172.26.105.42:9090/");

proyectoE.controller("listaProductosController",function($scope,$http, miServicioIP){
    
    $scope.IP=miServicioIP;
    
    
    
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
    
    $scope.lProducts;
    $scope.product={};
    $scope.escogencia=[];
    
    $scope.sendProducts=[];
    $scope.receiveMessage;
    
    $scope.ran=$scope.IP.concat("stages/addMaterials");
    
    $scope.registerEtapa={_nombre:'gerald', _descripcion:'geraldparkm1'};
    
    $scope.lProducts = [{name : 'Brochas para pintar',id : 'epa-100',stock: '789',categoria: 'Paredes',precio:1023},
                        {name : 'Cintas adhesivas',id : 'epa-101',stock: '52',categoria: 'Trabajo Preliminar',precio:1023},
                        {name : 'Espatulas',id : 'epa-102',stock: '867',categoria: 'Trabajo Preliminar',precio:1023},
                        {name : 'Pegamentos',id : 'epa-103',stock: '632',categoria: 'Pisos',precio:1023},
                        {name : 'Pinturas',id : 'epa-104',stock: '987',categoria: 'Paredes',precio:1023},
                        {name : 'Pistolas para pintar',id : 'epa-105',stock: '321',categoria: 'Paredes',precio:1023},
                        {name : 'Rodillos con mangos',id : 'epa-106',stock: '2952',categoria: 'Paredes',precio:1023},
                        {name : 'Accesorios para griferias',id : 'epa-107',stock: '12137',categoria: 'Instalacion Pluvial',precio:1023},
                        {name : 'Conexiones galvanizadas',id : 'epa-108',stock: '7610',categoria: 'Instalacion Pluvial',precio:1023},
                        {name : 'Extencione para tuberias',id : 'epa-109',stock: '11280',categoria: 'Instalacion Pluvial',precio:1023},
                        {name : 'Fregadero',id : 'epa-110',stock: '4328',categoria: 'Instalacion Pluvial',precio:1023},
                        {name : 'Griferia',id : 'epa-111',stock: '3264',categoria: 'Instalacion Pluvial',precio:1023},
                        {name : 'Medidor de agua',id : 'epa-112',stock: '10976',categoria: 'Instalacion Pluvial',precio:1023},
                        {name : 'Manguera con pistola',id : 'epa-113',stock: '147',categoria: 'Instalacion Pluvial',precio:1023},
                        {name : 'Rejillas',id : 'epa-114',stock: '4644',categoria: 'Escaleras',precio:1023},
                        {name : 'Lampara incandecente',id : 'epa-115',stock: '643',categoria: 'Instalacion Electrica',precio:1023},
                        {name : 'Lampara fluorecente',id : 'epa-116',stock: '4328',categoria: 'Instalacion Electrica',precio:1023},
                        {name : 'Lampara de escritorio',id : 'epa-117',stock: '12083',categoria: 'Instalacion Electrica',precio:1023},
                        {name : 'Ceramica tipo 1',id : 'epa-118',stock: '11048',categoria: 'Pisos',precio:1023},
                        {name : 'Ceramica tipo 2',id : 'epa-119',stock: '10236',categoria: 'Pisos',precio:1023},
                        {name : 'Ocre',id : 'epa-120',stock: '9191',categoria: 'Pisos',precio:1023},
                        {name : 'Fragua',id : 'epa-121',stock: '2928',categoria: 'Pisos',precio:1023},
                        {name : 'Cabos de madera',id : 'epa-122',stock: '3000',categoria: 'Techos',precio:1023},
                        {name : 'Cincel',id : 'epa-123',stock: '7842',categoria: 'Cimientos',precio:102},
                        {name : 'Cortadora de ceramica',id : 'epa-124',stock: '',categoria: 'Pisos',precio:1023},
                        {name : 'Corta loza',id : 'epa-125',stock: '7712',categoria: 'Pisos',precio:1023},
                        {name : 'Cemento Cemex',id : 'epa-126',stock: '4001',categoria: 'Paredes',precio:1023},
                        {name : 'Block',id : 'epa-127',stock: '1826',categoria: 'Paredes',precio:1023},
                        {name : 'Perling',id : 'epa-128',stock: '3555',categoria: 'Techos',precio:1023},
                        {name : 'Toma Corrientes',id : 'epa-129',stock: '736',categoria: 'Instalacion Electrica',precio:1023},
                        {name : 'Puerta tipo 1',id : 'epa-130',stock: '2390',categoria: 'Puertas',precio:1023},
                       ]; 
    
       /** $http.get($scope.IP.concat("stages/addMaterials")).
            success(function(data){
                $scope.lProducts = data;
                $http.post('http://172.26.105.42:9090/stages/register',$scope.registerEtapa).
                    success(function(data){
                        $scope.receiveMessage = data;
                        console.log(data);
                });
                
            });*/
    
        /**
        --
        --
        - Este metodo es para determinar si el producto es existente y sis se encuentra en stock.
        --
        --*/
        $scope.precioUnidad=0;
        $scope.precioMayoreo=0;
        $scope.precioTotalEtapa=0;
        $scope.update = function() {
            
            for (var i=0;i<$scope.lProducts.length;i++){
                
                if($scope.product.nombre==$scope.lProducts[i].id){
                    
                    for (var i=0;i<$scope.lProducts.length;i++){
                        
                        if($scope.product.nombre==$scope.lProducts[i].id){
                            
                            if($scope.product.cantidad<=$scope.lProducts[i].stock){
                                
                                $scope.precioUnidad=parseInt($scope.lProducts[i].precio);
                                $scope.precioMayoreo=parseInt($scope.precioUnidad)*parseInt($scope.product.cantidad);
                                $scope.precioTotalEtapa=parseInt($scope.precioTotalEtapa)+parseInt($scope.precioMayoreo);
                                $scope.sendProducts=({"id": $scope.lProducts[i].id,"nombre": $scope.lProducts[i].name,"precio": $scope.lProducts[i].precio,"cantidad" : $scope.lProducts[i].stock});
                                $scope.escogencia.push($scope.sendProducts);
                                console.log(JSON.stringify($scope.escogencia));
                                console.log($scope.precioUnidad);
                                console.log($scope.precioMayoreo);
                                console.log($scope.precioTotalEtapa);
                                
                            }else{
                                
                                console.log("Alguno de los datos ingresados posee almenos un error");
                                
                            }
                            
                        }
                        
                    }
                    
                }
                
              }
            
        };
        
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
