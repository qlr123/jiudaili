/*隐藏部分效果*/
$(function () {
	$(".jiu").mousemove(function () {
		
		$(".slide").css({"display":"block"})
		console.log($(".xiaoguo"))
		
	})
	$(".jiu").mouseout(function () {
		$(".slide").css({"display":"none"})
	})
	$(".slide").mousemove(function () {
		$(".slide").css({"display":"block"})
	})
	$(".slide").mouseout(function () {
		$(".slide").css({"display":"none"})
	})
	
})
$(function () {
	$(".jiu-2").mousemove(function () {
		$(".slide2").css({"display":"block"})
	})
	$(".jiu-2").mouseout(function () {
		$(".slide2").css({"display":"none"})
	})
	$(".slide2").mousemove(function () {
		$(".slide2").css({"display":"block"})
	})
	$(".slide2").mouseout(function () {
		$(".slide2").css({"display":"none"})
	})
	
})
$(function () {
	$(".jiu-3").mousemove(function () {
		$(".slide3").css({"display":"block"})
	})
	$(".jiu-3").mouseout(function () {
		$(".slide3").css({"display":"none"})
	})
	$(".slide3").mousemove(function () {
		$(".slide3").css({"display":"block"})
	})
	$(".slide3").mouseout(function () {
		$(".slide3").css({"display":"none"})
	})
	
})