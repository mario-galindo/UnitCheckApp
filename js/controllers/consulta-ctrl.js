app.controller('consultaControl',function($scope,$http){


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
			url:'http://rastreo1.sabuesotrack.com:3000/posiciones'
		
		}).then(function(data){

			console.log(data);

		},function(error){

			console.log(error);
		});
		
		//alert($scope.unidad + " " + $scope.server)
	};

})