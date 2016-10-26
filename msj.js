
$http.get($scope.IP.concat("stages/addMaterials")).
            success(function(data){
        
                $scope.lProducts = data;
                $http.post($scope.IP.concat("stages/register"),$scope.registerEtapa).
                
                    success(function(data){
                    
                        $scope.receiveMessage = data;
                        console.log(data);
                    });
            });

/**
Obtener lista de productos (Llamando al web service de la progra anterior)
*/
$http.get($scope.IP.concat("materials/getMaterials")).
    success(function(data){
        $scope.lProducts = data;
        console.log(data);
    });
/**
Asociar etapa a un proyecto
*/
$http.post($scope.IP.concat("stages/associateStage"),$scope.).
    success(function(data){
        $scope.receiveMessage = data;
        console.log(data);
    });
/**
Iniciar sesión
*/
$http.post($scope.IP.concat("users/login"),$scope.).
    success(function(data){
        $scope.receiveMessage = data;
        console.log(data);
    });
/**
Obtener todos los usuarios
*/
//Aca van los tres llamados, va a obtener: usuarios, ingeniero, administrador
$http.get($scope.IP.concat("users/all/1")).
    success(function(data){
        $scope.lTipoUsuario = data;
        console.log(data);
    });
$http.get($scope.IP.concat("users/all/2")).
    success(function(data){
        $scope.lTipoUsuario = data;
        console.log(data);
    });
$http.get($scope.IP.concat("users/all/3")).
    success(function(data){
        $scope.lTipoUsuario = data;
        console.log(data);
    });
/**
Registrar nueva cuenta (usuarios que ya estan registrados pero quieren otra cuenta con un rol diferente)
*/
$http.post($scope.IP.concat("users/newrol"),$scope.).
    success(function(data){
        $scope.receiveMessage = data;
        console.log(data);
    });

/**
Registrar proyecto
*/
$http.post($scope.IP.concat("projects/register"),$scope.).
    success(function(data){
        $scope.receiveMessage = data;
        console.log(data);
    });

/**
Registrar una etapa
*/
$http.post($scope.IP.concat("stages/register"),$scope.registerEtapa).
    success(function(data){
        $scope.receiveMessage = data;
        console.log(data);
    });



















