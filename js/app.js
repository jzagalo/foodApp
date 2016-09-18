var app = angular.module('FoodApp', ['ngRoute']);
app.run(function($rootScope, $templateCache) {
	$rootScope.showIndex = true;
	/* $rootScope.$on('$viewContentLoaded', function() {
     $templateCache.removeAll();
   });*/
});