import './styles/common.css';
import './styles/nav.scss';
import './styles/main.scss';

import 'angular';
import 'angular-ui-router';
import 'angular-messages';
import 'angular-animate';

import routerconfig from './scripts/routers/router.js';
import controllerModule from './scripts/controllers/controller.js'
export default angular.module('epartyApp',['ui.router','ngMessages','ngAnimate',controllerModule])
.config(routerconfig)
.factory('authInterceptor',["$q","$rootScope","$timeout",function ($q,$rootScope,$timeout) {
  return {
		request: function(config) {
            config.headers['x-session-token'] = "testToken"
            return config;
        },
        responseError: function (response) {
        	console.log(response.status);
			var tipMsg = '错误';
			if(response.status == 401) {
				window.location.href="#/index";
				tipMsg = '请重新登录';
			}else if (response.status == 404) {
           		tipMsg = '请求错误';

	        } else if (response.status == 400 || response.status == 500) {
	          	tipMsg = '服务器出错';

	        } else if (response.status == 409) {
	          	tipMsg = response.statusText;
	        }

			 $rootScope.serverError = 1;
	        $rootScope.tipMsg = tipMsg;
	        $timeout(function() {
	         $rootScope.serverError = 0;
	        }, 2000);

        	return $q.reject(response); 
        	// return response; 
		}
	};
}])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}])
.controller('appCtrl', ["$scope","$timeout",function ($scope,$timeout) {
  // $scope.$state=$state;
    if(!$scope.showTimes){
	  $timeout(function() {
	     $scope.showTimes = 1;
	    }, 2000);
	}

}]).name