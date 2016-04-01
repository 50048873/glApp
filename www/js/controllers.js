angular.module('starter')
.controller('HomeCtrl', function($rootScope) { 
	//$rootScope.tabsIsvisible = true;
})
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
})
.controller('MapCtrl', function($scope, $stateParams, HotelsFactory, HotelFactory) {
	
})
.controller('RefectoryCtrl', function($scope, $stateParams, RefectoryFactory) {
	$scope.refectories = RefectoryFactory;
})
.controller('GvernmentAffairCtrl', function($rootScope, $scope, $stateParams, GovernmentFactory) {
	//$rootScope.tabsIsvisible = false;
	$scope.governments = GovernmentFactory.Governmentsupport;
	$scope.$on('$ionicView.loaded', function() { 
		document.getElementsByClassName('tabs')[0].style.visibility = 'hidden';
	});
	$scope.$on('$ionicView.unloaded', function() { 
		document.getElementsByClassName('tabs')[0].style.visibility = 'visible';
	});
})
.controller('FinancialAffairCtrl', function($scope, $stateParams, FinancialFactory) {
	$scope.banks = FinancialFactory.getBank();
	
})
.controller('FinancialAffairBankCtrl', function($scope, $stateParams, FinancialFactory) {
	$scope.bankServices = FinancialFactory.getBankBusiness($stateParams.bankName);
	$scope.bankName = $stateParams.bankName;
})
.controller('FinancialAffairBankDetailCtrl', function($scope, $stateParams, FinancialDetailFactory) {
	$scope.bankServiceDetail = FinancialDetailFactory.getDetail($stateParams.bankId);
})
.controller('JoinusAffairCtrl', function($scope, $stateParams, JoinusFactory) {
	$scope.jobs = JoinusFactory.get();
})
.controller('JoinusDetailAffairCtrl', function($scope, $stateParams, JoinusFactory) {
	$scope.job = JoinusFactory.get($stateParams.id)
});
