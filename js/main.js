'use strict';
var myApp = angular.module('myApp', []);

//This configuration function will remove the header from all requests (not only CORS) done by the $http service
//This is because the default behavior of Angular to include the request header 'X-Requested-With',
//which can cause problems with CORS. This was fixed in v 1.1.1 (the unstable branch - see v1.1.1 bug fixes)
//by removing the header from cross domain requests, for more info on this: https://github.com/angular/angular.js/issues/1004.

app.config([ '$httpProvider', function($httpProvider) {

	$httpProvider.defaults.useXDomain = true;
	$httpProvider.defaults.withCredentials = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$httpProvider.defaults.headers.common["Accept"] = "application/json";
	$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
} ])