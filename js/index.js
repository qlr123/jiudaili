$(function(){
				$("#header").load("header.html");
				$("#footer").load("foot.html");
				$("#footer1").load("foot1.html");

				$(".topest li").hover(function(){
				$(this).find("img").stop().animate({left:$(this).innerWidth()},500)
			},function(){
				$(this).find("img").stop().animate({left:0},500)
				})
				
				$(".gold_bk li").hover(function(){
					$(this).find("img").stop().animate({left:$(this).innerWidth()},500)
					},function(){
					$(this).find("img").stop().animate({left:0},500)
					
				})
				
				$(".zs_gd_bka li").hover(function(){
					$(this).find("img:last").stop().animate({top:-$(this).innerHeight()},500)
					},function(){
					$(this).find("img:last").stop().animate({top:0},500)
				})
				
				$("#loginbtn").click(function(e){
					e.preventDefault();
					$(".login-section").css({display:"block"})
					$(".bh").css({display:"block"})
				})
				
				
//				console.log($("#floorNav li").eq(1))
				$("#floorNav li").eq(1).click(function()
				{
					console.log($(window).scrollTop());
				})
				
				//页面滚动添加样式
				$(window).scroll(function(){
					var st=$(this).scrollTop()
					
					if(st>=1300&&st<2955){
						$("#floorNav li").eq(1).addClass("hover")
								.siblings().removeClass("hover")
					}
					if(st>=2955&&st<4195){
						$("#floorNav li").eq(2).addClass("hover")
								.siblings().removeClass("hover")
					}
					if(st>=4195&&st<5295){
						$("#floorNav li").eq(3).addClass("hover")
								.siblings().removeClass("hover")
					}
					if(st>=5295&&st<6455){
						$("#floorNav li").eq(4).addClass("hover")
								.siblings().removeClass("hover")
					}
					if(st>=6455&&st<7520){
						$("#floorNav li").eq(5).addClass("hover")
								.siblings().removeClass("hover")
					}
					if(st>=7520&&st<8480){
						$("#floorNav li").eq(6).addClass("hover")
								.siblings().removeClass("hover")
					}
					if(st>=8480&&st<9420){
						$("#floorNav li").eq(7).addClass("hover")
								.siblings().removeClass("hover")
					}
					if(st>=9420&&st<9500){
						$("#floorNav li").eq(8).addClass("hover")
								.siblings().removeClass("hover")
					}
					if(st<1300&&st>9420){
						$("#floorNav li").removeClass("hover");
					}
					
				})
				
				//右侧导航栏滑动效果
				$("#floorNav li").eq(1).click(function()
				{
					$("body,html").stop().animate({"scrollTop":1300},500);
				})
				$("#floorNav li").eq(2).click(function()
				{
					$("body,html").stop().animate({"scrollTop":2955},500);
				})
				$("#floorNav li").eq(3).click(function()
				{
					$("body,html").stop().animate({"scrollTop":4195},500);
				})
				$("#floorNav li").eq(4).click(function()
				{
					$("body,html").stop().animate({"scrollTop":5295},500);
				})
				$("#floorNav li").eq(5).click(function()
				{
					$("body,html").stop().animate({"scrollTop":6455},500);
				})
				$("#floorNav li").eq(6).click(function()
				{
					$("body,html").stop().animate({"scrollTop":7520},500);
				})
				$("#floorNav li").eq(7).click(function()
				{
					$("body,html").stop().animate({"scrollTop":8480},500);
				})
				$("#floorNav li").eq(8).click(function()
				{
					$("body,html").stop().animate({"scrollTop":9420},500);
				})
				
				
				
				$("#floorNav li:last").click(function()
				{
					$("body,html").stop().animate({"scrollTop":0},500);
				})
				
				
				
				
				
				
				
				
//				$.getJSON("http://47.102.214.131:8081/jiudaili-1.0/jiudaili/region/all.do",function(data){
//					console.log(data)
//				})
//				$.getJSON("http://47.102.214.131:8081/jiudaili-1.0/jiudaili/navigationBar/all.do",function(data1){
//					console.log(data1)
//				})
				
				
				
				
				
})