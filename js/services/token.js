function tokenService(){

    this.token = "";
}
angular
      .module('UnitCheckApp')
      .service('tokenService',tokenService);


angular
      .module('UnitCheckApp')
      .service('APIInterceptor',function(tokenService){
        var service = this;

        service.request = function(config){

          access_token = tokenService ? tokenService.token : null;

          if(access_token){
            config.headers.authorization = access_token;
          }
          return config;
        };

        service.responseError = function(response){
          return response;
        };

      })


      angular
        .module('UnitCheckApp')
        .config(function($httpProvider){
          console.log($httpProvider)

            $httpProvider.interceptors.push('APIInterceptor');
        });
