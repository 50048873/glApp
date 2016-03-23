angular.module('starter.controllers', [])

.controller('ServicesCtrl', function($scope, Services) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.services = Services.all();
	$scope.remove = function(service) {
		Services.remove(service);
	};
})

.controller('HotelsCtrl', function($scope, $stateParams, HotelFactory) {
	console.log(HotelFactory);
	//$scope.service = Services.get($stateParams.serviceId);

})
.controller('RefectoryCtrl', function($scope, $stateParams, Services) {
	$scope.service = Services.get($stateParams.serviceId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
