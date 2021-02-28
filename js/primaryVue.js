//头部
var topnavlist = new Vue({
	el: "#pagetop",
	data: {

		list: [{
				name: "帮助中心",
				url: "#"
			},
			{
				name: "客服反馈",
				url: "#"
			},
			{
				name: "网站地图",
				url: "#"
			},
			{
				name: "加入收藏",
				url: "#"
			}
		]
	}
})

var bodyfooter = new Vue({
	el: "#bodyfooter",
	data: {
		list: [{
				h3: "关于我们",
				a1: "发展历程",
				a2: "联系方式",
				a3: "公司介绍",
				a4: "企业文化"
			},
			{
				h3: "付款方式",
				a1: "银行汇款",
				a2: "在线支付",
				a3: "银行汇款",
				a4: "公司转账"
			},
			{
				h3: "送货方式",
				a1: "上门自提",
				a2: "EMS快递",
				a3: "快递发货",
				a4: "平邮发货"
			},
			{
				h3: "售后服务",
				a1: "质保承诺",
				a2: "退换货政策",
				a3: "价格保护",
				a4: "返修申请"
			},
			{
				h3: "购物帮助",
				a1: "用户等级",
				a2: "积分获得与使用",
				a3: "购物流程",
				a4: "常见问题"
			}
		]
	}
})
//vue实现购物车功能
var sn = new Vue({
	el: "#bmiddle",
	data: {
		commodity: [{
				id: "1",
				name: "MIJIA/米家 米家电磁炉家用双频火力智能精准温控小米正品电磁炉",
				price: 259.99,
				count: 1,
				url: "productinfo.html"
			},
			{
				id: "2",
				name: "男士运动鞋 猫抓野外跑鞋2RMB313-1",
				price: 528.99,
				count: 1,
				url: ""
			}
		],
		counts: 0
	},
	methods: {
		prices: function() {
			var temp = 0,
				flag = 0;
			for (var i = 0, len = this.commodity.length; i < len; i++) {
				temp += this.commodity[i].price * this.commodity[i].count;
				flag += this.commodity[i].count;
			}
			this.counts = flag;
			return temp;
		}
	}
})
