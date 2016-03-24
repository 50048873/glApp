angular.module('starter.services', [])

.factory('Services', function() {
	// Might use a resource here that returns a JSON array

	// Some fake testing data
	var Services = [{
		id: 0,
		name: '办公租赁'
	}, {
		id: 1,
		name: '酒店旅游',
		url: 'hotels'
	}, {
		id: 2,
		name: '进口消费品'
	}, {
		id: 3,
		name: '职工食堂',
		url: 'refectory'
	}, {
		id: 4,
		name: '政务搭桥',
		url: 'governmentAffair'
	}, {
		id: 5,
		name: '融资理财',
		url: 'financial'
	}, {
		id: 6,
		name: '企业商学院',
		url: 'college'
	}, {
		id: 7,
		name: '品牌推广',
		url: 'brand'
	}, {
		id: 8,
		name: '企业招聘',
		url: 'joinus'
	}, {
		id: 9,
		name: '产品定制',
		url: 'product'
	}, {
		id: 10,
		name: '资产运营',
		url: 'asset'
	}, {
		id: 11,
		name: '高峰论坛',
		url: 'forum'
	}, {
		id: 12,
		name: '沙龙聚会',
		url: 'party'
	}, {
		id: 13,
		name: '任务'
	}, {
		id: 14,
		name: '更多',
		url: 'more'
	}];

	return {
		all: function() {
			return Services;
		},
		remove: function(chat) {
			Services.splice(Services.indexOf(chat), 1);
		},
		get: function(chatId) {
			for (var i = 0; i < Services.length; i++) {
				if (Services[i].id === parseInt(chatId)) {
					return Services[i];
				}
			}
			return null;
		}
	};
})
.factory('HotelsFactory', function() { 
	var hotels = [
		{
			"ID": "c00d89a7-dce7-47dc-b459-af6478edf637",
			"content": "酒店坐落于合肥市最繁华的淮河路步行街与长江路中段，地处合肥新地标银泰中心区域。",
			"Title": "合肥银泰君亭酒店",
			"Attachments": "",
			"IconAttachments": "http://220.249.79.2:18887/Images/JD/635802587141993453.jpg",
			"address": "位于合肥市长江中路98号，银泰中心区域，紧邻淮河路步行街，逍遥津公园。",
			"contacts": null,
			"tel": "0551-62691666",
			"Url": "http://220.249.79.2:18887/CommonData/viewpage/c00d89a7-dce7-47dc-b459-af6478edf637",
			"WorkPlace": ""
		},
		{
			"ID": "58ff86b0-b24d-4fb5-b09c-df31394bdf94",
			"content": " 太平湖皇冠假日酒店按五星级标准设计建造，建筑设计由澳洲Allen Jack Cottier完成，由全球著名的酒店管理公司洲际酒店管理公司运营管理。",
			"Title": "皇冠酒店",
			"Attachments": "http://220.249.79.2:18887/Images/JD/635775834942408161.jpg",
			"IconAttachments": "http://220.249.79.2:18887/Images/JD/635775834942066411.jpg",
			"address": "安徽省黄山市黄山区太平湖风景区滨湖大道1号",
			"contacts": null,
			"tel": "0559-5298888",
			"Url": "http://220.249.79.2:18887/CommonData/viewpage/58ff86b0-b24d-4fb5-b09c-df31394bdf94",
			"WorkPlace": ""
		},
		{
			"ID": "ae844c74-b67e-4635-bc6b-3075b7bb26b5",
			"content": "合肥绿地福朋酒店（喜来登集团管理）位于城市的新政治、商业和文化中心——合肥市政务文化新区。",
			"Title": "福朋酒店",
			"Attachments": "http://220.249.79.2:18887/Images/JD/635775837055729488.jpg",
			"IconAttachments": "http://220.249.79.2:18887/Images/JD/635775837055036269.jpg",
			"address": "中国安徽,合肥潜山路 298 号, 蜀山区邮政编码 230071",
			"contacts": null,
			"tel": "0551-65218888",
			"Url": "http://220.249.79.2:18887/CommonData/viewpage/ae844c74-b67e-4635-bc6b-3075b7bb26b5",
			"WorkPlace": ""
		}
	];
	return {
		all: function() { 
			return hotels;
		},
		get: function(id) { 
			for (var i = 0; i < hotels.length; i++) { 
				if (hotels[i].ID == id) { 
					return hotels[i];
				}
			}
			return null;
		}
	};
})
.factory('HotelFactory', function() { 
	var hotelRooms = [
		{
			"id": 'c00d89a7-dce7-47dc-b459-af6478edf637',
			"hotelRooms": {
				"RoomList": [
					{
						"ID": "bfdfa828-b0e5-4c97-a0f5-2e4c9065f855",
						"Title": "观景大床房",
						"content": "",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635802587143913563.jpg",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635802587143913563.jpg",
						"Url": "",
						"price": "428",
						"pricemd": "1448"
					},
					{
						"ID": "4f0165dc-cc88-40f5-9b44-23b64f3bad37",
						"Title": "大床房",
						"content": "包含早餐",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635802587143793556.jpg",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635802587143793556.jpg",
						"Url": "",
						"price": "398",
						"pricemd": "1228"
					}
				],
				"ListCount": 2
			}
		},
		{
			"id": '58ff86b0-b24d-4fb5-b09c-df31394bdf94',
			"hotelRooms": {
				"RoomList": [
					{
						"ID": "bfdfa828-b0e5-4c97-a0f5-2e4c9065f855",
						"Title": "观景大床房",
						"content": "",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635802587143913563.jpg",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635802587143913563.jpg",
						"Url": "",
						"price": "428",
						"pricemd": "1448"
					},
					{
						"ID": "4f0165dc-cc88-40f5-9b44-23b64f3bad37",
						"Title": "大床房",
						"content": "包含早餐",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635802587143793556.jpg",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635802587143793556.jpg",
						"Url": "",
						"price": "398",
						"pricemd": "1228"
					}
				],
				"ListCount": 2
			}
		},
		{
			"id": 'ae844c74-b67e-4635-bc6b-3075b7bb26b5',
			"hotelRooms": {
				"RoomList": [
					{
						"ID": "bfdfa828-b0e5-4c97-a0f5-2e4c9065f855",
						"Title": "观景大床房",
						"content": "",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635802587143913563.jpg",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635802587143913563.jpg",
						"Url": "",
						"price": "428",
						"pricemd": "1448"
					},
					{
						"ID": "4f0165dc-cc88-40f5-9b44-23b64f3bad37",
						"Title": "大床房",
						"content": "包含早餐",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635802587143793556.jpg",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635802587143793556.jpg",
						"Url": "",
						"price": "398",
						"pricemd": "1228"
					}
				],
				"ListCount": 2
			}
		}
	];
	return { 
		get: function(id) { 
			for (var i = 0; i < hotelRooms.length; i++) { 
				if ( hotelRooms[i].id == id) { 
					return hotelRooms[i];
				}
			}
			return null;
		}
	};
})
.factory('RefectoryFactory', function() { 
	var refectory = [
		{
			"ID": "91adf0b5-fdea-4c97-bdc9-48c6eb572857",
			"content": "",
			"Title": "食堂",
			"Attachments": "http://220.249.79.2:18887/Images/ZGST/635762841812392578.png,http://220.249.79.2:18887/Images/ZGST/635775843323222628.jpg",
			"IconAttachments": "http://220.249.79.2:18887/Images/ZGST/635762841812392578.png",
			"address": null,
			"contacts": null,
			"tel": null,
			"Url": "http://220.249.79.2:18887/CommonData/viewpage/91adf0b5-fdea-4c97-bdc9-48c6eb572857",
			"WorkPlace": "",
			"country": null
		}
	];
	return refectory;
});
