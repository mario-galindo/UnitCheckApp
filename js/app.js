var app = angular.module('UnitCheckApp', [

		'ngRoute'

	])

		.config(function($routeProvider) {

			$routeProvider
				.when('/',{

					templateUrl:'views/login.html',
					controller:'loginControl'
				})

				.when('/main',{

					resolve:{

						"check":function($location,$rootScope){

							if(!$rootScope.logeado){
								$location.path('/')
							}
						}
					},
						templateUrl:'views/main.html'
				})

				.when('/consulta',{

					resolve:{

						"ckeck":function($location,$rootScope){

							if(!$rootScope.logeado){
								$location.path('/')
							}
						}
					},

					templateUrl:'views/consulta.html',
					controller:'consultaControl'
				})


				.otherwise({

					redirectTo:'/'
				});

		});
