app.controller('loginControl',function($scope,$http,$location,tokenService,$rootScope){



		//Parametros
		$scope.usuario = "";
		$scope.password = "";




		//Request
		$scope.funcion_login = function(){

			//Variable con los Parametros
			var data = {
				user: $scope.usuario,
				pass:$scope.password
			};


			$http({
	 			 method: 'POST',
				 data:data,
	  		 url: 'http://rastreo1.sabuesotrack.com/check/login'

			//Cuando el request sea exitoso nos devuelve la informacion en la variable response
			}).then(function(response) {

    			var res = response.data
    			console.log(res);
    			/*
    			if($scope.usuario == 'mario' && $scope.password == '123'){

    				$rootScope.logeado = true;

    				$location.path('/main');
    				console.log("Si Existe!!");
    			}else{
    				console.log("No Existe");
    			}
				*/


				if (typeof res.token === "undefined") {

					alert(res.message);
				}else{

					$rootScope.logeado = true;

						tokenService.token = res.token;
						$location.path('/main');
    				console.log("Si Existe!!");
				}


    		//Cuando hay un error en el request nos devuelve el error en la variable error
  			}, function(error) {

    			console.log(error);
  			});

		};

});
