app.controller('PlaceOrder', function($scope, $rootScope, $location, sharedData){
	   // Global variable Determines whether to show start page
	   $rootScope.showIndex = false;

	   // Pizza Sizes Array
	   $scope.pizzaSizes = [
	   {size: '10cm' , num: 10 },
	   {size: '20cm', num:20 },
	   {size: '40cm' , num: 40}
	   ];

	   // Default Pizza size
	   $scope.order = "20cm";
        
       // Ingredients Array
       $scope.ingredients = [
       					'Mozarella',
       					'Tomato Sauce',
       					'Mushrooms',
       					'Cheese',
       					'Spinach'
       ];

       // Ingredients model variable
       $scope.needIngredients = [];

       // Cheese Rand variable
       $scope.needCheese = 'No';

       $scope.cancelOrder = function(){
       	$rootScope.showIndex = true;
       	$location.path('/');
       }

       // Setting properties that will be shared among controllers
        $scope.sharedData = sharedData;

        // Collecting Data and redirecting to next page
        $scope.getOrderDetails = function(){
	        $scope.sharedData.order = $scope.order;
	        $scope.sharedData.needIngredients = $scope.needIngredients.join(',');
	        $scope.sharedData.needCheese = $scope.needCheese;

	        $location.path('/contact-details');
	    }

}).controller('ContactDetails', function($scope, $rootScope, sharedData, $location){
		

		$rootScope.showIndex = false;

		// Input form  acceptable format 
		$scope.matchPattern = new RegExp("[a-z]");
		$scope.streetPattern = new RegExp("[a-z]/?");
		$scope.houseNumPattern = new RegExp("[0-9]");

		// Form data object
		$scope.data = {};

		 // Setting properties that will be shared among controllers
		$scope.sharedData = sharedData;
		
		// Collect Data and redirect
		$scope.getContactDetails = function(){
			$scope.sharedData.data = $scope.data;			
			$location.path('/confirm-order');

		}

		// Error Handler
		$scope.getError = function(error){
			if(angular.isDefined(error)){
				if(error.required){
					return "Please Enter a Characters Only";
				}else if(error.number){
					return "Please Enter digits 0-9 Only";
				}
			}
		}
		// back Button
		$scope.backButton = function(){
			$location.path('/place-order');
		}
   		
   		// Cancel Order
   	   $scope.cancelOrder = function(){
       	$rootScope.showIndex = true;
       	$location.path('/');
       }
		

}).controller('ConfirmOrder', function($scope, $rootScope,$http, $location, sharedData){
	
	$rootScope.showIndex = false;
	$scope.summary = sharedData;

	$scope.cancelOrder = function(){
       	$rootScope.showIndex = true;
       	$location.path('/');
    }

	$scope.backButton = function(){
		    sharedData.data = $scope.summary;
			$location.path('/contact-details');

	}
    
    $scope.makeOrder = function(){
	    $http.post('https://echo.getpostman.com/post', $scope.summary)
	    .success(function(){
	    	$location.path('/order-sent');
	    }).error(function(){
	    	$location.path('/order-sent');
	    	
	    });
	}

}).controller('OrderSent', function($scope,$location, $rootScope, sharedData){
	$rootScope.showIndex = false;
	$scope.firstname = sharedData.firstname;
	$scope.close = function(){
		$rootScope.showIndex = true;
		$location.path('/');
	}

});
