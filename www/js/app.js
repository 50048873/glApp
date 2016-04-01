// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

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
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.platform.ios.tabs.style('standard');
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.position('bottom');
	$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');
	//$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
	//$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
	$ionicConfigProvider.platform.ios.views.transition('ios');
	$ionicConfigProvider.platform.android.views.transition('android');
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
				templateUrl: 'templates/tabs.html',
				controller: 'HomeCtrl'
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
			// 某个酒店
			.state('tab.hotel', {
				url: '/services/hotels/:hotelId',
				views: {
					'tab-services': {
						templateUrl: 'templates/services-hotel.html',
						controller: 'HotelCtrl'
					}
				}
			})
				// 某个酒店地图
				.state('tab.hotel-map', {
					url: '/services/hotel/map',
					views: {
						'tab-services': {
							templateUrl: 'templates/services-hotel-map.html',
							controller: 'MapCtrl'
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
			// 职工食堂详情
			.state('tab.refectory-detail', {
				url: '/services/refectory/detail',
				views: {
					'tab-services': {
						templateUrl: 'templates/services-refectory-detail.html'
					}
				}
			})
		// 政务搭桥
		.state('tab.governmentAffair', {
			url: '/services/governmentAffair',
			views: {
				'tab-services': {
					templateUrl: 'templates/services-governmentAffair.html',
					controller: 'GvernmentAffairCtrl'
				}
			}
		})
			// 政务搭桥详情
			.state('tab.governmentAffair-detail', {
				url: '/services/governmentAffair-detail',
				views: {
					'tab-services': {
						templateUrl: 'templates/services-governmentAffair-detail.html'
					}
				}
			})
		// 融资理财
		.state('tab.financialAffair', {
			url: '/services/financialAffair',
			views: {
				'tab-services': {
					templateUrl: 'templates/services-financialAffair.html',
					controller: 'FinancialAffairCtrl'
				}
			}
		})
			// 融资理财-某个银行理财列表
			.state('tab.financialAffair-bank', {
				url: '/services/financialAffair/:bankName',
				views: {
					'tab-services': {
						templateUrl: 'templates/services-financialAffair-bank.html',
						controller: 'FinancialAffairBankCtrl'
					}
				}
			})
				// 融资理财-某个银行理财列表-列表详情
				.state('tab.financialAffair-bank-detail', {
					url: '/services/financialAffair/bank/:bankId',
					views: {
						'tab-services': {
							templateUrl: 'templates/services-financialAffair-bank-detail.html',
							controller: 'FinancialAffairBankDetailCtrl'
						}
					}
				})
		// 企业招聘
		.state('tab.joinus', {
			url: '/services/joinus',
			views: {
				'tab-services': {
					templateUrl: 'templates/services-joinus.html',
					controller: 'JoinusAffairCtrl'
				}
			}
		})
			// 企业招聘详情
			.state('tab.joinus-detail', {
				url: '/services/joinus/:id',
				views: {
					'tab-services': {
						templateUrl: 'templates/services-joinus-detail.html',
						controller: 'JoinusDetailAffairCtrl'
					}
				}
			})

	// 我
	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': {
				templateUrl: 'templates/tab-account.html'
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
