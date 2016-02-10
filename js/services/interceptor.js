app.service('APIInterceptor',function(tokenService){

var service = this;

	service.request = function(config){

		access_token = tokenService ? tokenService.token:null;

			if(access_token){

				config.header.authorization = access_token;
			}
			return config;
	};

	service.responseError = function(response){
		return response;
	};


})

app.config(function($httpProvider){
	console.log($httpProvider)

	$httpProvider.interceptors.push('APIInterceptor');
});