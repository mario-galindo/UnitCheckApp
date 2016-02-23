app.controller('consultaControl',function($scope,$http,tokenService){

	$scope.ListaDatos = [];

	//Atributos
	$scope.unidad =  "";
	$scope.server = "";


	//Request
	$scope.consultaUnidad = function(){


		//Variable con los parametros
		var data = {

			unidad: $scope.unidad,
			server: $scope.server
		};

		$http({

			method:'GET',
			params:data,
			url:'http://rastreo1.sabuesotrack.com/check/posiciones'

		}).then(function(data){



			$scope.ListaDatos = data.data.info;

			$scope.unidad = "";
			$scope.server = "";

		},function(error){

			console.log(error);
		});

		//alert($scope.unidad + " " + $scope.server)
	};

})
