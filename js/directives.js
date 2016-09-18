 app.directive('myWidget', function(){
 var linkFunction = function (scope, element,attributes)
 {	    
 	   console.log(element);
	    $(element).checkbox();
	  
  };

  return {
        restrict: "A",
        link : linkFunction
  };

  });