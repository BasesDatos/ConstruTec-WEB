regUsers.controller('RegUserController',function($scope){
    $scope.nombre="weqr";
    $scope.pApellido="hfahsdkfjhasdkfh";
    $scope.sApellido="";
    $scope.tel="";
    $scope.contrasena="";
    $scope.cedula="";
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


proyectoE.controller('proyectoController',function($scope,etapaInfo){
    $scope.usuario=etapaInfo.mensaje;
    $scope.lProyecto= [
        {pNombre:"San Jose",pEstado:"Activo",pCosto:"4444"},
        {pNombre:"Heredia",pEstado:"Desactivado",pCosto:"4322342"},
        {pNombre:"Azafran",pEstado:"Activo",pCosto:"23234"},
        {pNombre:"Montiel",pEstado:"Concluido",pCosto:"34534535"},
        {pNombre:"San Jose",pEstado:"Activo",pCosto:"4444"},
        {pNombre:"Heredia",pEstado:"Desactivado",pCosto:"4322342"},
        {pNombre:"Azafran",pEstado:"Activo",pCosto:"23234"},
        {pNombre:"Montiel",pEstado:"Concluido",pCosto:"34534535"},
        
        {pNombre:"San Jose",pEstado:"Activo",pCosto:"4444"},
        {pNombre:"Heredia",pEstado:"Desactivado",pCosto:"4322342"},
        {pNombre:"Azafran",pEstado:"Activo",pCosto:"23234"},
        {pNombre:"Montiel",pEstado:"Concluido",pCosto:"34534535"}
    ];
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
