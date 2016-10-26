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
    $scope.error1Alert=false;
    $scope.correctoAlert=false;
    
    
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
    
    
    $http.get($scope.IP.concat("stages/addMaterials")).
    success(function(data){
        $scope.lProducts = data;
        console.log(data);
    });
    
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
                
                if($scope.product.id==$scope.lProducts[i].id){
                    
                    for (var i=0;i<$scope.lProducts.length;i++){
                        
                        if($scope.product.id==$scope.lProducts[i].id){
                            
                            if($scope.product.cantidad<=$scope.lProducts[i].stock){
                                $scope.error1Alert=false;
                                $scope.correctoAlert=true;
                                $scope.precioUnidad=parseInt($scope.lProducts[i].precio);
                                $scope.precioMayoreo=parseInt($scope.precioUnidad)*parseInt($scope.product.cantidad);
                                $scope.precioTotalEtapa=parseInt($scope.precioTotalEtapa)+parseInt($scope.precioMayoreo);
                                
                                $scope.sendProducts=({"_id": $scope.lProducts[i].id,"_nombre": $scope.lProducts[i].name,"_precio": $scope.lProducts[i].precio,"_cantidadDisponible" : $scope.lProducts[i].stock});
                                
                                $scope.escogencia.push($scope.sendProducts);
                                console.log(JSON.stringify($scope.escogencia));
                                console.log($scope.precioUnidad);
                                console.log($scope.precioMayoreo);
                                console.log($scope.precioTotalEtapa);
                                
                            }else{
                                $scope.error1Alert=true;
                                $scope.correctoAlert=false;
                                console.log("Alguno de los datos ingresados posee almenos un error");
                                
                            }
                            
                        }
                        
                    }
                    
                }else{
                    $scope.error1Alert=true;
                    $scope.correctoAlert=false;
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
