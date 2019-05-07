//json {width:500,height:300,left:200};
//obj指当前要动的DOM的对象
//链式变化
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//假设定时器每一次运行时，都达到了目标值，至于假设是否成立
		//要看下面的判断
		var flag = true;
		for(var attr in json){
			var iTarget = json[attr];
			if(attr == "opacity"){
				var iCur = parseInt(getStyle(obj,attr)*100);
			}else{
				var iCur = parseInt(getStyle(obj,attr));
			}
			
			var iSpeed = (iTarget-iCur)/8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if(attr == "opacity"){
				obj.style.opacity = (iCur+iSpeed)/100;
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")";
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}
			
			//要考虑属性值到达目标值先后顺序
			//下边这种写法，只要有一个到达目标值，就把定时器给清除了
			/*if(iCur==iTarget){
				clearInterval(obj.timer);
			}*/
			if(iCur != iTarget){
				//还有没达到的属性
				flag = false;
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},20);
}
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}
	return obj.currentStyle[attr];
}
