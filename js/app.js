var app = angular.module('FoodApp', ['ngRoute', 'ngAnimate']);
app.run(function($rootScope, $templateCache) {
	$rootScope.showIndex = true;
	
});