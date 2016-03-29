angular.module('starter')

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
		url: 'financialAffair'
	}, {
		id: 6,
		name: '企业商学院'//,
		//url: 'college'
	}, {
		id: 7,
		name: '品牌推广'//,
		//url: 'brand'
	}, {
		id: 8,
		name: '企业招聘',
		url: 'joinus'
	}, {
		id: 9,
		name: '产品定制'//,
		//url: 'product'
	}, {
		id: 10,
		name: '资产运营'//,
		//url: 'asset'
	}, {
		id: 11,
		name: '高峰论坛'//,
		//url: 'forum'
	}, {
		id: 12,
		name: '沙龙聚会'//,
		//url: 'party'
	}, {
		id: 13,
		name: '任务'
	}, {
		id: 14,
		name: '更多'//,
		//url: 'more'
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
						"ID": "c63f6057-3a24-4576-8c3b-f3634ae7dbd3",
						"Title": "豪华房",
						"content": "无旱 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756765185553306.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756765185553306.png",
						"Url": "",
						"price": "920",
						"pricemd": ""
					},
					{
						"ID": "2d09cd22-ada1-4178-9536-8edff44811fc",
						"Title": "行政房",
						"content": "无旱 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756765185673313.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756765185673313.png",
						"Url": "",
						"price": "1220",
						"pricemd": ""
					},
					{
						"ID": "0d1648d9-5e63-413a-abfe-40e4b629daaa",
						"Title": "高级套房",
						"content": "无旱 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756765185913326.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756765185913326.png",
						"Url": "",
						"price": "1320",
						"pricemd": "1321"
					},
					{
						"ID": "70a8634e-d20d-4cb0-aab3-4db724dc4c90",
						"Title": "高级房",
						"content": "无旱 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756765185293291.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756765185293291.png",
						"Url": "",
						"price": "820",
						"pricemd": "800"
					}
				],
				"ListCount": 4
			}
		},
		{
			"id": 'ae844c74-b67e-4635-bc6b-3075b7bb26b5',
			"hotelRooms": {
				"RoomList": [
					{
						"ID": "4653caad-752a-4aa8-9975-7db49f791877",
						"Title": "舒适双床房",
						"content": "无早 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756753224935831.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756753224935831.png",
						"Url": "",
						"price": "498",
						"pricemd": ""
					},
					{
						"ID": "2368dddf-b240-4331-bd0d-0c6f842a61d6",
						"Title": "豪华双床房",
						"content": "无早 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756753226015893.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756753226015893.png",
						"Url": "",
						"price": "598",
						"pricemd": ""
					},
					{
						"ID": "d1bafb36-4944-4aec-9cb8-0ac032a02bfe",
						"Title": "豪华大床房",
						"content": "无早 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756757451860378.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756757451860378.png",
						"Url": "",
						"price": "628",
						"pricemd": ""
					},
					{
						"ID": "749018e3-8ca6-43d7-bbf5-65bd993918e6",
						"Title": "舒适套房",
						"content": "无早 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756757452170396.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756757452170396.png",
						"Url": "",
						"price": "1208",
						"pricemd": ""
					},
					{
						"ID": "55d80673-fa47-41ce-a6ec-446996e6b729",
						"Title": "行政双床房",
						"content": "无早 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756757452290403.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756757452290403.png",
						"Url": "",
						"price": "978",
						"pricemd": ""
					},
					{
						"ID": "b9ad83df-589d-4b0d-86d9-73b6d000ca75",
						"Title": "行政大床房",
						"content": "无早 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756757452410409.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756757452410409.png",
						"Url": "",
						"price": "978",
						"pricemd": ""
					},
					{
						"ID": "ba62ebc9-485e-4217-9e82-e0dba3bb0fa4",
						"Title": "豪华套房",
						"content": "无早 大床房",
						"Attachments": "http://220.249.79.2:18887/Images/JD/635756757452530416.png",
						"IconAttachments": "http://220.249.79.2:18887/Images/JD/635756757452530416.png",
						"Url": "",
						"price": "1783",
						"pricemd": ""
					}
				],
				"ListCount": 7
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
})
.factory('GovernmentFactory', function() { 
	var government = {
		"Governmentsupport": [
			{
				"ID": "c474bd70-43b7-42dd-9edd-d99b453322ae",
				"content": "贯彻执行国家和省、市对外开放的方针政策。负责制定我区对外招商引资的政策。对全区招商引资工作进行宏观指导。负责编制我区对外招商引资的总体规划、年度计划。负责全区招商经费的管理和使用。 负责牵头组织全区性境内外的各类招商活动。指导、协调全区乡镇、街道、工业园区和区直部门、单位的招商引资工作。负责全区招商网络建设。建立全区招商项目库，编制招商项目册和宣传资料。汇总统计全区招商引资情况，定期发布全区招商信息。负责全区经贸招商团组出访活动、会展活动的登记、备案。",
				"Title": "合肥市包河区招商局",
				"Attachments": "http://220.249.79.2:18887/Images/ZWDQ/635762728558017578.jpg,http://220.249.79.2:18887/Images/ZWDQ/635774966103303312.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/ZWDQ/635774966103303312.png",
				"address": null,
				"contacts": null,
				"tel": null,
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/c474bd70-43b7-42dd-9edd-d99b453322ae",
				"WorkPlace": "",
				"country": null
			}
		],
		"ListCount": 1
	};
	return government;
})
.factory('FinancialFactory', function() { 
	var financial = {
		"Finance": [
			{
				"ID": "363188c5-d9b4-4a5b-b89c-b60b0b81a63b",
				"content": "",
				"Title": "结算贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751483852732933.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751483852732933.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/363188c5-d9b4-4a5b-b89c-b60b0b81a63b",
				"bank": "招商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814767423717658.png"
			},
			{
				"ID": "5559a89c-e7e6-43ad-8100-4911802fd7df",
				"content": "",
				"Title": "银行理财产品办理",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635775853807924817.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635775853807924817.png",
				"tel": "0551—63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/5559a89c-e7e6-43ad-8100-4911802fd7df",
				"bank": "招商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814767423717658.png"
			},
			{
				"ID": "59f220db-3406-4ed4-9ecf-be0d5a15b0c2",
				"content": "",
				"Title": "银行业务、政策宣传",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635775854262466048.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635775854262466048.png",
				"tel": "0551—63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/59f220db-3406-4ed4-9ecf-be0d5a15b0c2",
				"bank": "招商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814767423717658.png"
			},
			{
				"ID": "772480af-59d8-4848-b293-d7337743684f",
				"content": "",
				"Title": "POS商户贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751494460975509.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751494460975509.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/772480af-59d8-4848-b293-d7337743684f",
				"bank": "招商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814767423717658.png"
			},
			{
				"ID": "84156dca-b7ce-4055-a4a4-a56ca96d2295",
				"content": "",
				"Title": "配套贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751492427928140.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751492427928140.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/84156dca-b7ce-4055-a4a4-a56ca96d2295",
				"bank": "招商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814767423717658.png"
			},
			{
				"ID": "a50bf240-d52b-42ea-8e9c-27d7d9f88565",
				"content": "",
				"Title": "对公、对私开销户业务",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635775852673363782.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635775852673363782.png",
				"tel": "0551—63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/a50bf240-d52b-42ea-8e9c-27d7d9f88565",
				"bank": "招商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814767423717658.png"
			},
			{
				"ID": "acc99553-7130-4273-bbed-0483a8a0fb16",
				"content": "",
				"Title": "代收代缴业务办理",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635775853249516349.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635775853249516349.png",
				"tel": "0551—63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/acc99553-7130-4273-bbed-0483a8a0fb16",
				"bank": "招商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814767423717658.png"
			},
			{
				"ID": "c56e5528-a29c-4108-a02a-bad1cd78e183",
				"content": "",
				"Title": "信用贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751490404242199.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751490404242199.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/c56e5528-a29c-4108-a02a-bad1cd78e183",
				"bank": "招商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814767423717658.png"
			},
			{
				"ID": "f66072dc-f3f7-4619-b058-745fd0e38f6d",
				"content": "",
				"Title": "诚信纳税贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751488421187839.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751488421187839.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/f66072dc-f3f7-4619-b058-745fd0e38f6d",
				"bank": "招商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814767423717658.png"
			},
			{
				"ID": "95814757-c863-4eb1-8fe2-1adf8bb36716",
				"content": "代收代缴业务",
				"Title": "代收代缴业务",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635811931782134475.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635811931782134475.png",
				"tel": "15556952916",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/95814757-c863-4eb1-8fe2-1adf8bb36716",
				"bank": "广发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814768843156514.png"
			},
			{
				"ID": "b81a04a7-dda9-4d2b-b025-feac24b97190",
				"content": "",
				"Title": "个人免抵押信款",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635811920479890567.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635811920479890567.png",
				"tel": "15556952916",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/b81a04a7-dda9-4d2b-b025-feac24b97190",
				"bank": "广发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814768843156514.png"
			},
			{
				"ID": "c558fe70-9814-4d24-9962-d9fe03604ac3",
				"content": "",
				"Title": "个人随借随还抵押类贷款",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635811930856057281.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635811930856057281.png",
				"tel": "15556952916",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/c558fe70-9814-4d24-9962-d9fe03604ac3",
				"bank": "广发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814768843156514.png"
			},
			{
				"ID": "693548f9-491f-41cd-a651-50850ef9719f",
				"content": "个人信用卡业务",
				"Title": "个人信用卡业务",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635811932334028576.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635811932334028576.png",
				"tel": null,
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/693548f9-491f-41cd-a651-50850ef9719f",
				"bank": "广发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814768843156514.png"
			},
			{
				"ID": "2ae58a1e-ea83-462c-befa-407812ddf1bc",
				"content": "",
				"Title": "高收益理财",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635811907400103142.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635811907400103142.png",
				"tel": "15556952916",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/2ae58a1e-ea83-462c-befa-407812ddf1bc",
				"bank": "广发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814768843156514.png"
			},
			{
				"ID": "4ebd0509-6d70-4aa1-8758-37745f89974c",
				"content": "",
				"Title": "POS机办理",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751606425081082.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751606425081082.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/4ebd0509-6d70-4aa1-8758-37745f89974c",
				"bank": "徽商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769399091690.png"
			},
			{
				"ID": "255356c2-be72-4cc4-a73c-34854659a535",
				"content": "",
				"Title": "投标保函、履约保函、信贷证明、委托贷款、财务顾问等",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751604108325970.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751604108325970.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/255356c2-be72-4cc4-a73c-34854659a535",
				"bank": "徽商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769399091690.png"
			},
			{
				"ID": "1229afab-cbb1-46bf-8c00-c090ecd81de2",
				"content": "",
				"Title": "小企业易保贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751588394654244.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751588394654244.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/1229afab-cbb1-46bf-8c00-c090ecd81de2",
				"bank": "徽商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769399091690.png"
			},
			{
				"ID": "6d5e8162-0597-47fb-85d2-555c1aec6574",
				"content": "",
				"Title": "小企业固定资产购置贷款",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751601344063422.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751601344063422.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/6d5e8162-0597-47fb-85d2-555c1aec6574",
				"bank": "徽商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769399091690.png"
			},
			{
				"ID": "702371d4-f03f-4758-8d71-94bf96dce904",
				"content": "",
				"Title": "政府采购合同融资、出口企业专项担保资金担保贷款、应收账款质押贷款",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751599544421091.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751599544421091.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/702371d4-f03f-4758-8d71-94bf96dce904",
				"bank": "徽商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769399091690.png"
			},
			{
				"ID": "7c63d317-eec7-4534-b490-54c70c83a94a",
				"content": "",
				"Title": "小企业快捷贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751598067908180.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751598067908180.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/7c63d317-eec7-4534-b490-54c70c83a94a",
				"bank": "徽商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769399091690.png"
			},
			{
				"ID": "9efe1f0e-2490-43ff-a251-05e66fd38fcd",
				"content": "",
				"Title": "小企业商务卡",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751593401156803.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751593401156803.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/9efe1f0e-2490-43ff-a251-05e66fd38fcd",
				"bank": "徽商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769399091690.png"
			},
			{
				"ID": "d1d39d66-87a1-49a3-b973-7a4c44663483",
				"content": "",
				"Title": "个人理财业务",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751605149981391.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751605149981391.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/d1d39d66-87a1-49a3-b973-7a4c44663483",
				"bank": "徽商银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769399091690.png"
			},
			{
				"ID": "d686daa6-e092-4745-b1b9-f275f84ad6f7",
				"content": "",
				"Title": "速贷通",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751581749108617.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751581749108617.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/d686daa6-e092-4745-b1b9-f275f84ad6f7",
				"bank": "建设银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769054430291.png"
			},
			{
				"ID": "ad898fdc-d1e2-401a-b00e-91738db46a78",
				"content": "",
				"Title": "对公、对私开销户业务",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635775847345714724.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635775847345714724.png",
				"tel": "0551—63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/ad898fdc-d1e2-401a-b00e-91738db46a78",
				"bank": "建设银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769054430291.png"
			},
			{
				"ID": "71c4b443-e541-4637-842d-1004d24bc72b",
				"content": "",
				"Title": "信用贷款",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751575834219012.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751575834219012.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/71c4b443-e541-4637-842d-1004d24bc72b",
				"bank": "建设银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769054430291.png"
			},
			{
				"ID": "20e5fa7b-5f66-4b0d-85ce-28d94ede1d1e",
				"content": "",
				"Title": "小企业固定资产购置贷款",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751580742015912.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751580742015912.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/20e5fa7b-5f66-4b0d-85ce-28d94ede1d1e",
				"bank": "建设银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769054430291.png"
			},
			{
				"ID": "2441573d-cf64-4da5-a83c-b6d58b933872",
				"content": "",
				"Title": "银行业务、政策宣传",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635775851000755551.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635775851000755551.png",
				"tel": "0551—63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/2441573d-cf64-4da5-a83c-b6d58b933872",
				"bank": "建设银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769054430291.png"
			},
			{
				"ID": "582d6ef8-1f23-4a0b-b767-05a096a1bdb2",
				"content": "",
				"Title": "政府采购贷款",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751577460571306.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751577460571306.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/582d6ef8-1f23-4a0b-b767-05a096a1bdb2",
				"bank": "建设银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769054430291.png"
			},
			{
				"ID": "5f255558-ee56-40b8-842f-92b0d0d6d1c3",
				"content": "",
				"Title": "代收代缴业务办理",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635775849918450339.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635775849918450339.png",
				"tel": "0551—63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/5f255558-ee56-40b8-842f-92b0d0d6d1c3",
				"bank": "建设银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769054430291.png"
			},
			{
				"ID": "5fde015a-342d-43ad-bd4e-4a5623dc15aa",
				"content": "",
				"Title": "成长之路",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751586990615516.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751586990615516.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/5fde015a-342d-43ad-bd4e-4a5623dc15aa",
				"bank": "建设银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769054430291.png"
			},
			{
				"ID": "6762c7f0-6dad-4822-95ad-e7ffcb71a2d1",
				"content": "",
				"Title": "银行理财产品办理",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635775850565188925.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635775850565188925.png",
				"tel": "0551—63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/6762c7f0-6dad-4822-95ad-e7ffcb71a2d1",
				"bank": "建设银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769054430291.png"
			},
			{
				"ID": "1dce7088-5d30-4ad8-8e32-e527cf47d4f9",
				"content": "",
				"Title": "小额信用贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751556855342963.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751556855342963.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/1dce7088-5d30-4ad8-8e32-e527cf47d4f9",
				"bank": "浦发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769223040780.png"
			},
			{
				"ID": "107c13a0-f905-4de5-b1fd-3b91134f3f4e",
				"content": "",
				"Title": "账款贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751553662324329.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751553662324329.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/107c13a0-f905-4de5-b1fd-3b91134f3f4e",
				"bank": "浦发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769223040780.png"
			},
			{
				"ID": "458648fd-8ef2-4dd9-9f7d-d8466049e553",
				"content": "",
				"Title": "微小宝、组合贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751556031592469.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751556031592469.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/458648fd-8ef2-4dd9-9f7d-d8466049e553",
				"bank": "浦发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769223040780.png"
			},
			{
				"ID": "48fed937-22e4-4abe-932a-082cef4e82cc",
				"content": "",
				"Title": "结算贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751554491085909.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751554491085909.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/48fed937-22e4-4abe-932a-082cef4e82cc",
				"bank": "浦发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769223040780.png"
			},
			{
				"ID": "6c02f8d5-b745-44e6-861d-1732137f61e6",
				"content": "",
				"Title": "联贷联保、信用培养计划、共赢共盟",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751574856618123.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751574856618123.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/6c02f8d5-b745-44e6-861d-1732137f61e6",
				"bank": "浦发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769223040780.png"
			},
			{
				"ID": "85135be2-e00a-4213-b4ed-b22de8d07741",
				"content": "",
				"Title": "租金贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751495744335679.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751495744335679.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/85135be2-e00a-4213-b4ed-b22de8d07741",
				"bank": "浦发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769223040780.png"
			},
			{
				"ID": "90324758-f697-439a-809b-57d76e81d765",
				"content": "",
				"Title": "捷易贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751552798090667.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751552798090667.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/90324758-f697-439a-809b-57d76e81d765",
				"bank": "浦发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769223040780.png"
			},
			{
				"ID": "9a00dca2-a754-4ca8-a762-919b42aabf41",
				"content": "",
				"Title": "网络循环贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751557515354946.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751557515354946.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/9a00dca2-a754-4ca8-a762-919b42aabf41",
				"bank": "浦发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769223040780.png"
			},
			{
				"ID": "c060bbbc-64c2-4014-91ff-d0eda14cc149",
				"content": "",
				"Title": "抵押循环贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751549610611443.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751549610611443.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/c060bbbc-64c2-4014-91ff-d0eda14cc149",
				"bank": "浦发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769223040780.png"
			},
			{
				"ID": "f8ad440f-7872-4042-9e1a-bf701ab115d4",
				"content": "",
				"Title": "积分贷",
				"Attachments": "http://220.249.79.2:18887/Images/RZLC/635751559708042191.png",
				"IconAttachments": "http://220.249.79.2:18887/Images/RZLC/635751559708042191.png",
				"tel": "0551-63450813",
				"Url": "http://220.249.79.2:18887/CommonData/viewpage/f8ad440f-7872-4042-9e1a-bf701ab115d4",
				"bank": "浦发银行",
				"BankUrl": "http://220.249.79.2:18887/Images/RZLC/635814769223040780.png"
			}
		],
		"ListCount": 41
	};
	var arr = financial.Finance;
	return { 
		getBank: function() { 
			var result = [], hash = {}, elem = null;
		    for (var i = 0; (elem = arr[i]) != null; i++) {
		        if (!hash[elem.bank]) {
		            result.push(elem);
		            hash[elem.bank] = true;
		        }
		    }
		    return result;
		},
		getBankBusiness: function(bankName) { 
			var result = [];
			for (var i = 0; i < arr.length; i++) { 
				if (arr[i].bank === bankName) { 
					result.push(arr[i]);
				}
			}
			return result;
		}
	};
})
.factory('FinancialDetailFactory', function() { 
	var financialDetail = {
		"Finance": [
			{
				"ID": "363188c5-d9b4-4a5b-b89c-b60b0b81a63b",
				"content": "对以招商银行为主要结算银行且结算量稳定的小企业客户，依据其在我行结算的收款量，采取信用方式发放的人民币流动资金授信业务。",
				"Title": "结算贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "5559a89c-e7e6-43ad-8100-4911802fd7df",
				"content": "银行理财产品办理",
				"Title": "银行理财产品办理",
				"tel": "0551—63450813"
			},
			{
				"ID": "59f220db-3406-4ed4-9ecf-be0d5a15b0c2",
				"content": "银行业务、政策宣传",
				"Title": "银行业务、政策宣传",
				"tel": "0551—63450813"
			},
			{
				"ID": "772480af-59d8-4848-b293-d7337743684f",
				"content": "装有POS机，且近3个月月均刷卡收款不低于10万，信用良好，3年持续经营经验，本地有房,刷卡流量越大，贷款额度越大",
				"Title": "POS商户贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "84156dca-b7ce-4055-a4a4-a56ca96d2295",
				"content": " 已在招商银行办理了住房或商用房抵押贷款（包括个人住房贷款、个人商业用房贷款、房产抵押的个人消费贷款、个人抵押购房贷款和足额抵押个人经营贷款），信用良好，2年持续经营经验，在原贷款基础上额外增加贷款额度",
				"Title": "配套贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "a50bf240-d52b-42ea-8e9c-27d7d9f88565",
				"content": "对公、对私开销户业务",
				"Title": "对公、对私开销户业务",
				"tel": "0551—63450813"
			},
			{
				"ID": "acc99553-7130-4273-bbed-0483a8a0fb16",
				"content": "代收代缴业务办理",
				"Title": "代收代缴业务办理",
				"tel": "0551—63450813"
			},
			{
				"ID": "c56e5528-a29c-4108-a02a-bad1cd78e183",
				"content": "信用良好，3年持续经营经验，本地有房，本地户籍或夫妻双方在本地居住和工作。无抵押，免担保，有房、有家、有生意，就有信用贷。",
				"Title": "信用贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "f66072dc-f3f7-4619-b058-745fd0e38f6d",
				"content": "招商银行对于诚信、按时、足额纳税的优质小企业给予信用方式综合授信。",
				"Title": "诚信纳税贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "95814757-c863-4eb1-8fe2-1adf8bb36716",
				"content": "代收代缴业务",
				"Title": "代收代缴业务",
				"tel": "15556952916"
			},
			{
				"ID": "b81a04a7-dda9-4d2b-b025-feac24b97190",
				"content": "个人免抵押免担保类信用贷款",
				"Title": "个人免抵押信款",
				"tel": "15556952916"
			},
			{
				"ID": "c558fe70-9814-4d24-9962-d9fe03604ac3",
				"content": "个人随借随还抵押类贷款",
				"Title": "个人随借随还抵押类贷款",
				"tel": "15556952916"
			},
			{
				"ID": "693548f9-491f-41cd-a651-50850ef9719f",
				"content": "个人信用卡业务",
				"Title": "个人信用卡业务",
				"tel": null
			},
			{
				"ID": "2ae58a1e-ea83-462c-befa-407812ddf1bc",
				"content": "高收益理财",
				"Title": "高收益理财",
				"tel": "15556952916"
			},
			{
				"ID": "4ebd0509-6d70-4aa1-8758-37745f89974c",
				"content": "POS机办理",
				"Title": "POS机办理",
				"tel": "0551-63450813"
			},
			{
				"ID": "255356c2-be72-4cc4-a73c-34854659a535",
				"content": "投标保函、履约保函、信贷证明、委托贷款、财务顾问等",
				"Title": "投标保函、履约保函、信贷证明、委托贷款、财务顾问等",
				"tel": "0551-63450813"
			},
			{
				"ID": "1229afab-cbb1-46bf-8c00-c090ecd81de2",
				"content": "小企业易保贷",
				"Title": "小企业易保贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "6d5e8162-0597-47fb-85d2-555c1aec6574",
				"content": "小企业固定资产购置贷款",
				"Title": "小企业固定资产购置贷款",
				"tel": "0551-63450813"
			},
			{
				"ID": "702371d4-f03f-4758-8d71-94bf96dce904",
				"content": "政府采购合同融资、出口企业专项担保资金担保贷款、应收账款质押贷款",
				"Title": "政府采购合同融资、出口企业专项担保资金担保贷款、应收账款质押贷款",
				"tel": "0551-63450813"
			},
			{
				"ID": "7c63d317-eec7-4534-b490-54c70c83a94a",
				"content": "小企业快捷贷",
				"Title": "小企业快捷贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "9efe1f0e-2490-43ff-a251-05e66fd38fcd",
				"content": "小企业商务卡",
				"Title": "小企业商务卡",
				"tel": "0551-63450813"
			},
			{
				"ID": "d1d39d66-87a1-49a3-b973-7a4c44663483",
				"content": "个人理财业务",
				"Title": "个人理财业务",
				"tel": "0551-63450813"
			},
			{
				"ID": "d686daa6-e092-4745-b1b9-f275f84ad6f7",
				"content": "客户提供建设银行认可的足够有效的抵(质)押财产和特定保证的基础上,高效、快捷办理流动资金贷款。",
				"Title": "速贷通",
				"tel": "0551-63450813"
			},
			{
				"ID": "ad898fdc-d1e2-401a-b00e-91738db46a78",
				"content": "对公、对私开销户业务",
				"Title": "对公、对私开销户业务",
				"tel": "0551—63450813"
			},
			{
				"ID": "71c4b443-e541-4637-842d-1004d24bc72b",
				"content": "指向符合建设银行信用贷款条件的企业客户办理采用企业主及其配偶承担连带保证或以信用方式发放的小额信用贷款。",
				"Title": "信用贷款",
				"tel": "0551-63450813"
			},
			{
				"ID": "20e5fa7b-5f66-4b0d-85ce-28d94ede1d1e",
				"content": "建设银行为企业提供专项用于购置生产经营所需的商用房、办公房、厂房等固定资产贷款支持。",
				"Title": "小企业固定资产购置贷款",
				"tel": "0551-63450813"
			},
			{
				"ID": "2441573d-cf64-4da5-a83c-b6d58b933872",
				"content": "银行业务、政策宣传",
				"Title": "银行业务、政策宣传",
				"tel": "0551—63450813"
			},
			{
				"ID": "582d6ef8-1f23-4a0b-b767-05a096a1bdb2",
				"content": "指建设银行为安徽省政府采购平台中标客户办理的，以中标合同为融资依据的贷款业务。",
				"Title": "政府采购贷款",
				"tel": "0551-63450813"
			},
			{
				"ID": "5f255558-ee56-40b8-842f-92b0d0d6d1c3",
				"content": "代收代缴业务办理",
				"Title": "代收代缴业务办理",
				"tel": "0551—63450813"
			},
			{
				"ID": "5fde015a-342d-43ad-bd4e-4a5623dc15aa",
				"content": "建设银行提前为企业客户进行额度授信,在核定的额度及有效期内,可以办理贷款、承兑、保证的等表内外授信业务.一次授信、多项选择。",
				"Title": "成长之路",
				"tel": "0551-63450813"
			},
			{
				"ID": "6762c7f0-6dad-4822-95ad-e7ffcb71a2d1",
				"content": "银行理财产品办理",
				"Title": "银行理财产品办理",
				"tel": "0551—63450813"
			},
			{
				"ID": "1dce7088-5d30-4ad8-8e32-e527cf47d4f9",
				"content": "小额信用贷",
				"Title": "小额信用贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "107c13a0-f905-4de5-b1fd-3b91134f3f4e",
				"content": "账款贷",
				"Title": "账款贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "458648fd-8ef2-4dd9-9f7d-d8466049e553",
				"content": "微小宝、组合贷",
				"Title": "微小宝、组合贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "48fed937-22e4-4abe-932a-082cef4e82cc",
				"content": "结算贷",
				"Title": "结算贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "6c02f8d5-b745-44e6-861d-1732137f61e6",
				"content": "联贷联保、信用培养计划、共赢共盟",
				"Title": "联贷联保、信用培养计划、共赢共盟",
				"tel": "0551-63450813"
			},
			{
				"ID": "85135be2-e00a-4213-b4ed-b22de8d07741",
				"content": "租金贷",
				"Title": "租金贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "90324758-f697-439a-809b-57d76e81d765",
				"content": "捷易贷",
				"Title": "捷易贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "9a00dca2-a754-4ca8-a762-919b42aabf41",
				"content": "网络循环贷",
				"Title": "网络循环贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "c060bbbc-64c2-4014-91ff-d0eda14cc149",
				"content": "抵押循环贷",
				"Title": "抵押循环贷",
				"tel": "0551-63450813"
			},
			{
				"ID": "f8ad440f-7872-4042-9e1a-bf701ab115d4",
				"content": "积分贷",
				"Title": "积分贷",
				"tel": "0551-63450813"
			}
		],
		"ListCount": 41
	};
	var arr = financialDetail.Finance;
	return { 
		getDetail: function(id) { 
			for (var i = 0; i < arr.length; i++) { 
				if (arr[i].ID === id) { 
					return arr[i];
				}
			}
			return null;
		}
	};
})
.factory('JoinusFactory', function() { 
	var jobs = {
	    "ComanyTrain": [
	        {
	            "ID": "9ce30088-f31f-4f99-bdec-841a746c33c9",
	            "content": "<p>招聘人数： 若干名</p><p>要求：大专及以上学历，专业不限，30周岁以下，容貌端正，形象气质佳，亲和力强，有较强的沟能能力和良好的团队精神；具有相关房地产销售工作经验，销售业绩优秀者可优先考虑。</p>",
	            "Title": "置业顾问 ",
	            "Attachments": "http://220.249.79.2:18887/Images/QYZPH/635762776484208984.jpg",
	            "IconAttachments": "",
	            "address": null,
	            "contacts": null,
	            "tel": "0551-63455971",
	            "Url": "http://220.249.79.2:18887/CommonData/viewpage/9ce30088-f31f-4f99-bdec-841a746c33c9",
	            "Work": "合肥",
	            "recruiters": "绿地控股集团安徽房地产事业部",
	            "money": "面议",
	            "country": null
	        },
	        {
	            "ID": "7ed7ba33-582f-4a85-93fc-720569c758d3",
	            "content": "<p>招聘人数：若干名</p><p>要求：30左右，房地产、市场营销、公共关系类相关专业大专及以上学历，3年商办销售经验或奢侈品销售，金融、保险等高端大宗产品销售经验，容貌端正，形象气质佳，亲和力强，有较强的沟能能力和良好的团队精神；</p>",
	            "Title": "大客户经理",
	            "Attachments": "http://220.249.79.2:18887/Images/QYZPH/635751463891025588.jpg",
	            "IconAttachments": "",
	            "address": null,
	            "contacts": null,
	            "tel": "0551-63455971",
	            "Url": "http://220.249.79.2:18887/CommonData/viewpage/7ed7ba33-582f-4a85-93fc-720569c758d3",
	            "Work": "合肥",
	            "recruiters": "绿地控股集团安徽房地产事业部",
	            "money": "面议",
	            "country": null
	        },
	        {
	            "ID": "1f2dba94-07ae-45fb-ae83-8222c8ad1180",
	            "content": "<p>招聘人数： 3名</p><p>要求：本科及以上学历，5年以上房地产营销管理经验，协助领导进行市场开拓，重点客户维护，项目运营管理；精通房地产策划和销售执行管理，具有较好的规划统筹能力、计划执行能力和判断决策能力，有较强的公关能力；熟悉房地产开发全程中投资、研究、土地、规划、设计、策划、销售、推广等系列环节，能够带领团队完成公司下达的营销任务，具有和大品牌开发商合作经验者优先。</p><p>招聘邮箱: <a href='mailto:ahldhr@163.com'>ahldhr@163.com</a></p>",
	            "Title": "项目营销总监",
	            "Attachments": "http://220.249.79.2:18887/Images/QYZPH/635751462718822579.jpg",
	            "IconAttachments": "",
	            "address": null,
	            "contacts": null,
	            "tel": "0551-63455971",
	            "Url": "http://220.249.79.2:18887/CommonData/viewpage/1f2dba94-07ae-45fb-ae83-8222c8ad1180",
	            "Work": "合肥",
	            "recruiters": "绿地控股集团安徽房地产事业部",
	            "money": "面议",
	            "country": null
	        },
	        {
	            "ID": "5bb728b4-47e8-4132-be45-726e3bb03bbf",
	            "content": "<p>1、30岁以上，房地产、市场营销、公共关系类相关专业专科及以上学历，具有8年以上招商经验，6年以上商业地产项目招商管理工作经验，能独立谈判主力商家；</p><p>2、具有丰富餐饮、休闲、娱乐、百货、超市、儿童产业、文化创意产业等资源；</p><p>3、良好的决策/分析/管理和协调能力，思路敏捷，沟通谈判能力强，善于整合各类社会资源；</p><p>4、职业素养高、具创新意识，品行端正、忠诚企业，无不良记录，身心健康；</p><p>5、熟悉安徽地区商业发展状况，并熟练掌握国际成熟商业运营模式；</p><p>&nbsp;</p><p>岗位职责：</p><p>1、熟悉大型都市综合体的招商管理流程并独立带领团队开展招商工作；</p><p>2、负责招商团队的组建、培训及日常管理；</p><p>3、负责组织开展商业项目定位与市场研究、策划推广、招商管理和商业运营管理工作，具有独立撰写商业运营报告能力，为商业前期策划提供相关建议；</p>",
	            "Title": "招商总监",
	            "Attachments": "http://220.249.79.2:18887/Images/QYZPH/635751461212467966.jpg",
	            "IconAttachments": "",
	            "address": null,
	            "contacts": null,
	            "tel": "0551-63455971",
	            "Url": "http://220.249.79.2:18887/CommonData/viewpage/5bb728b4-47e8-4132-be45-726e3bb03bbf",
	            "Work": "合肥",
	            "recruiters": "绿地控股集团安徽房地产事业部",
	            "money": "面议",
	            "country": null
	        }
	    ],
	    "ListCount": 4
	};
	var arr = jobs.ComanyTrain;
	return { 
		get: function(id) { 
			if (!arguments.length) { 
				return arr;
			} else { 
				for (var i = 0; i < arr.length; i++) { 
					if (arr[i].ID === id) { 
						return arr[i];
					}
				}
				return null;
			}
		}
	};
});
