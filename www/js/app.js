// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
	.state('tab', {
		url: '/tab',
		abstract: true,
		views: {
			'main-view': {
				templateUrl: 'templates/tabs.html'
			}
		}
		
	})

	// 圈子
	.state('tab.friends', {
		url: '/friends',
		views: {
			'tab-friends': {
				templateUrl: 'templates/tab-friends.html'
			}
		}
	})
	// 通讯录
	.state('tab.addressbook', {
		url: '/addressbook',
		views: {
			'tab-addressbook': {
				templateUrl: 'templates/tab-addressbook.html'
			}
		}
	})
	// 服务
	.state('tab.services', {
		url: '/services',
		views: {
			'tab-services': {
				templateUrl: 'templates/tab-services.html',
				controller: 'ServicesCtrl'
			}
		}
	})
		// 酒店旅游
		.state('tab.hotels', {
			url: '/services/hotels',
			views: {
				'tab-services': {
					templateUrl: 'templates/services-hotels.html',
					controller: 'HotelsCtrl'
				}
			}
		})
		// 职工食堂
		.state('tab.refectory', {
			url: '/services/refectory',
			views: {
				'tab-services': {
					templateUrl: 'templates/services-refectory.html',
					controller: 'RefectoryCtrl'
				}
			}
		})
		// 政务搭桥
		.state('tab.governmentAffair', {
			url: '/services/governmentAffair',
			views: {
				'tab-services': {
					templateUrl: 'templates/services-governmentAffair.html'
				}
			}
		})

	// 我
	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': {
				templateUrl: 'templates/tab-account.html',
				controller: 'AccountCtrl'
			}
		}
	})
	// 日程
	.state('tab.dash', {
		url: '/dash',
		views: {
			'tab-dash': {
				templateUrl: 'templates/tab-dash.html'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/services');

});
