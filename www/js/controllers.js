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

.controller('HotelsCtrl', function($scope, $stateParams, HotelsFactory) {
	$scope.hotels = HotelsFactory.all();
})
.controller('HotelCtrl', function($scope, $stateParams, HotelsFactory, HotelFactory) {
	 $scope.hotelrooms = HotelFactory.get($stateParams.hotelId).hotelRooms.RoomList;
	 $scope.hotel = HotelsFactory.get($stateParams.hotelId);
	 console.log($scope.hotel);
})
.controller('MapCtrl', function($scope, $stateParams, HotelsFactory, HotelFactory) {
	
})
.controller('RefectoryCtrl', function($scope, $stateParams, RefectoryFactory) {
	$scope.refectories = RefectoryFactory;
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
