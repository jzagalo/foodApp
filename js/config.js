app.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/place-order', {
		controller : 'PlaceOrder',
		templateUrl : '/partials/place-order.html'
	}).when('/contact-details', {
		controller  : 'ContactDetails',
		templateUrl : '/partials/contact-details.html'
	}).when('/confirm-order', {
		controller : 'ConfirmOrder',
		templateUrl : '/partials/confirm-order.html' 
	}).when('/order-sent', {
		controller : 'OrderSent',
		templateUrl : '/partials/order-sent.html'
	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);
});