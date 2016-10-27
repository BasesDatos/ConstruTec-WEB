proyectoE.constant("miServicioIP",{"ip": "http://172.26.104.236:9090/"});

proyectoE.controller('Bar',function($scope,USER){
    $scope.user="";
    if(USER.getValor!=''){
        $scope.user=USER.getValor();
    }

});
proyectoE.controller('RegUserController',function($scope){
    $scope.userName="";
    $scope.nombreUsuario="";
    $scope.nombre="";
    $scope.pApellido="";
    $scope.sApellido="";
    $scope.cedula="";
    $scope.ingCode="";
    $scope.contrasena="";
    $scope.tel="";
    $scope.rol="";
    $scope.isRol=false;

    
    $scope.activacion=function(){
        if ($scope.rol=="Usuario general"){
            $scope.isRol=false;
        }else{
            if($scope.rol=="Ingeniero"){
                $scope.isRol=true;
            }else{
                $scope.isRol=false;
            }
        }
        
    }
    $scope.registrar=function(){
        if($scope.rol!=""){
            if ($scope.rol=="Usuario general"){
            $scope.ingCode="";
            $scope.user={"_usuario": $scope.userName ,"_nombre": $scope.nombre,"_pApellido": $scope.pApellido,"_sApellido": $scope.sApellido,"_cedula": $scope.cedula,"_contrasena": $scope.contrasena,"_telefono": $scope.tel,"_rol": 1,"_codigo":$scope.ingCode};
        }else{
            if($scope.rol=="Ingeniero"){
            $scope.user={"_usuario": $scope.userName ,"_nombre": $scope.nombre,"_pApellido": $scope.pApellido,"_sApellido": $scope.sApellido,"_cedula": $scope.cedula,"_contrasena": $scope.contrasena,"_telefono": $scope.tel,"_rol": 2,"_codigo":$scope.ingCode};
            }else{
                $scope.ingCode="";
                $scope.user={"_usuario": $scope.userName ,"_nombre": $scope.nombre,"_pApellido": $scope.pApellido,"_sApellido": $scope.sApellido,"_cedula": $scope.cedula,"_contrasena": $scope.contrasena,"_telefono": $scope.tel,"_rol": 3,"_codigo":$scope.ingCode};
                
            }
        }
        }else{
            console.log("");
        }
        $http.post($scope.IP.concat("users/register"),$scope.user).
        success(function(data){
            $scope.receiveMessage = data;
            console.log(data);
    });
        
    }
});

proyectoE.controller("loginUserController",function($scope,$http,miServicioIP,USER){
    $scope.successA=false;
    $scope.errorA=false;
    $scope.userName="";
    $scope.contrasena="";
    
    $scope.update=function(){
        $scope.successA=false;
        $scope.errorA=false;
        $scope.inicioSesion={"_usuario":$scope.userName,"_contrasena":$scope.contrasena};
        
        $scope.dir=miServicioIP.ip+"users/login";
        $http.post($scope.dir,$scope.inicioSesion).
        success(function(data){
            $scope.receiveMessage = data;
            if($scope.receiveMessage != 1 && $scope.receiveMessage !=2){
                $scope.successA=true;
                USER.setValor($scope.userName)
            }
            else{
                $scope.errorA=true;
            }
         });  
    }

});



proyectoE.controller("listaProductosController",function($scope,$http, miServicioIP){
    
    //$scope.IP=miServicioIP;
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
    
    //$scope.ran=$scope.IP.concat("stages/addMaterials");
    
    //$scope.registerEtapa={_nombre:'gerald', _descripcion:'geraldparkm1'};
    
    $scope.dir=miServicioIP.ip+"materials/getMaterials";
    $http.get($scope.dir).
    success(function(data){
        console.log(data);
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
                
                if($scope.product.id==$scope.lProducts[i]._id){
                    
                    for (var i=0;i<$scope.lProducts.length;i++){
                        
                        if($scope.product.id==$scope.lProducts[i]._id){
                            
                            if($scope.product.cantidad<=$scope.lProducts[i]._cantidadDisponible){
                                $scope.error1Alert=false;
                                $scope.correctoAlert=true;
                                $scope.precioUnidad=parseInt($scope.lProducts[i]._precio);
                                $scope.precioMayoreo=parseInt($scope.precioUnidad)*parseInt($scope.product.cantidad);
                                $scope.precioTotalEtapa=parseInt($scope.precioTotalEtapa)+parseInt($scope.precioMayoreo);
                                
                                $scope.sendProducts=({"_id": $scope.lProducts[i]._id,"_nombre": $scope.lProducts[i]._nombre,"_precio": $scope.lProducts[i]._precio,"_cantidadDisponible" : $scope.product.cantidad});
                                
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
    $scope.dir1=miServicioIP.ip+"stages/addMaterials";
    $scope.sendProducts1={"_id":1,"_materiales":$scope.escogencia};
    
    $scope.sendEscojencia=function(){
        console.log($scope.sendProducts1);
        $http.post($scope.dir1,$scope.sendProducts1).
        success(function(data){
            //$scope.receiveMessage = data;
            console.log(data);
        }); 
    }
    
        
})


proyectoE.factory('etapaInfo', function() {
  return {
    nombre:'',
    id:0,
    getId: function() {
      return this.id;
    },
    getNombre: function() {
      return this.nombre;
    },
    setValor: function(nombre,id) {
      this.id = id;
      this.nombre = nombre;
    }
  };
})

proyectoE.factory('MeInfo', function() {
  return {
    nombre:'',
    id:0,
    getId: function() {
      return this.id;
    },
    getNombre: function() {
      return this.nombre;
    },
    setValor: function(nombre,id) {
      this.id = id;
      this.nombre = nombre;
    }
  };
})

proyectoE.factory('USER', function() {
  return {
    user: '',
    getValor: function() {
      return this.user;
    },
    setValor: function(msg) {
      this.user = msg;
    }
  };
})


proyectoE.controller('proyectoController',function($scope,$http,etapaInfo,miServicioIP,USER){
    $scope.usuario=etapaInfo.getNombre();
    $scope.lProyecto=[];
    
    $scope.dir=miServicioIP.ip +"users/getProjects?pUser="+USER.getValor();
    console.log($scope.dir);
    if(USER.getValor()!=''){
        $http.get($scope.dir).
        success(function(data){
        $scope.lProyecto = data;
        console.log(data);
    });
    }
    
    
    $scope.setNP=function(name,id){
        etapaInfo.setValor(name,id);
        $scope.usuario=etapaInfo.getNombre();
        
    }
    
});

proyectoE.controller('etapaController',function($scope,$http,etapaInfo,miServicioIP,MeInfo){
    $scope.usuario=etapaInfo.getNombre();
    $scope.id = etapaInfo.getId();
    $scope.letapas=[];
    
    $scope.dir=miServicioIP.ip +"projects/getStagesProjects/"+$scope.id;
    $http.get($scope.dir).
    success(function(data){
        $scope.letapas = data;
        console.log(data);
    });
    
    $scope.getNP=function(){
        $scope.usuario=etapaInfo.getNombre();
    }
    //$scope.setNP=function(name){
      //  nuevaEtapaInfo.mensaje=name;
    //}
    $scope.setEtapaMate=function(nombre,id){
        MeInfo.setValor(nombre,id);
       
    }
})

proyectoE.controller('nuevaEtapaController',function($scope,etapaInfo){
    $scope.eNombre ="albin";
    $scope.eDescripcion ="";
    $scope.eFInicio ="";
    $scope.eFFinal="";
    
    
    $scope.letapas= [{pNombre:"Etapa1",pInicio:"10/11/15",pFin:"23/12/16"},
                    {pNombre:"Etapa2",pInicio:"10/11/15",pFin:"23/12/16"},
                    {pNombre:"Etapa3",pInicio:"10/11/15",pFin:"23/12/16"},
                    {pNombre:"Etapa4",pInicio:"10/11/15",pFin:"23/12/16"}];

});

proyectoE.controller('dataEtapaController',function($scope,MeInfo,$http,miServicioIP){
    $scope.id=0;
    $scope.nombreEtapa='';
    $scope.letapas=[];
    
     $('#etapaInfo').on('shown.bs.modal', function() {
         $scope.id=MeInfo.getId();
         $scope.nombreEtapa=MeInfo.getNombre();
         $scope.dir=miServicioIP.ip +"stages/getMaterialsStage/"+$scope.id;
         $http.get($scope.dir).
          success(function(data){
                $scope.letapas = data;
                console.log(data);
          });
     });

});

proyectoE.controller('nuevoProyectoController',function($scope,$http,miServicioIP,USER){
    $scope.name = "";
    $scope.ingenieros=[];
    $scope.pNombre ="";
    $scope.pProvincia ="";
    $scope.pDistrito ="";
    $scope.pCanton ="";
    
    
    $scope.dirPos=miServicioIP.ip + "projects/register";
    $scope.dirGet=miServicioIP.ip + "users/all/2";
    
    $scope.ing ={_codigo:-1,_nombre:""};
    
    $('#newProyectos').on('shown.bs.modal', function() {$scope.pNombre ="";
            $scope.pProvincia ="";
            $scope.pDistrito ="";
            $scope.pCanton ="";
            $scope.pNombre ="";
            $scope.pProvincia ="";
            $scope.pDistrito ="";
            $scope.pCanton ="";
            $http.get($scope.dirGet ).
                success(function(data){
                    $scope.ingenieros = data;
                    console.log(data);
                });
            });
    
    
    
    
    $scope.posProyecto=function(nombre,id){
        $scope.send= {"_nombre":$scope.pNombre,"_provincia":$scope.pProvincia,"_canton":$scope.pCanton,"_distrito":$scope.pDistrito,"_cliente":USER.user,"_ingeniero":$scope.ing._usuario}
        $http.post($scope.dirPos,$scope.send).
        success(function(data){
            $scope.receiveMessage = data;
            console.log(data);
    });
        
       
    }

});

