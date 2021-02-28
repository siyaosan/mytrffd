

$(function() {
	//一明一暗效果
	$("#table tr:odd td").css("background-color", "#eee");
	$("#table tr:odd").attr("bg", "#eee");
	$("#table tr:even").attr("bg", "#FFFFFF");
	$("#table tr td").hover(
		function() {
			$(this).parent().find("td").css("background-color", "#d5f4f1")
		},
		function() {
			$(this).parent().children().css("background-color", $(this).parent().attr("bg"));
		}
	)

	//a标签鼠标移动事件
	$("#pagebody a").hover(
		function() {
			$(this).css({
				"color": "red",
				"text-decoration": "underline"
			});
		},
		function() {
			$(this).css({
				"color": "#686868",
				"text-decoration": "none"
			});
		})

	//图片切换函数
	var indeximg = 0;
	$("#indeximg li").click(function() {
		var index = $(this).index();
		$(this).addClass("indexli2").removeClass('indexli1').siblings().addClass("indexli1").removeClass('indexli2');
		$(".indeximg img").eq(index).show().siblings().hide();
		indeximg = index;
	})
	setInterval(function() {
		$("#indeximg li").eq(indeximg).addClass("indexli1").removeClass('indexli2');
		$("#indeximg li").eq((indeximg + 1) % 5).addClass("indexli2").removeClass('indexli1')
		$(".indeximg img").eq(indeximg).fadeOut("slow").hide();
		$(".indeximg img").eq((indeximg + 1) % 5).fadeIn('slow');
		indeximg++;
		indeximg %= 5;
	}, 2000)

	//主体左部商品分类单击隐藏事件
	$(".userbox_li").click(function() {
		if ($(this).next().is(":hidden"))
			$(this).next().show();
		else
			$(this).next().hide();
	})

	// 头部导航鼠标移动事件
	$("#pagetop li").hover(
		function() {
			$(this).toggleClass('href');
		},
		function() {
			$(this).toggleClass('href');
		})

	//时间显示
	function so() {
		var d = new Date();
		var m = d.getMinutes();
		if (m < 10) m = '0' + m;
		var s = d.getSeconds();
		if (s < 10) s = '0' + s;
		var a = new Array("星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日")
		$("#topnavlistlast").text(d.getFullYear() + '/' + (1 + d.getMonth()) + '/' + d.getDate() + "   " + a[d.getDay()] +
			'  ' + d.getHours() + ':' + m + ':' + s);
	}
	so();
	setInterval(function() {
		so();
	}, 1000);
})
