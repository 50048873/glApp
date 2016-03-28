angular.module('starter')
	.filter('urlConvert', function() {
		return function(input, scope) { 
			return encodeURIComponent(input);
		};
	});
