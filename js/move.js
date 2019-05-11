function startMove(obj,json,fn){
	//json {width:500,height:300,left:200};
	//obj指当前要动的DOM的对象
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json){
			var iTarget = json[attr];
			if(attr == "opacity"){					// 考虑opacity透明度
				var iCur = parseInt(getStyle(obj,attr)*100);  //先乘100，再除以100；不然取整会直接取1；
			}else{
				var iCur = parseInt(getStyle(obj,attr));
			}
			
			var iSpeed = (iTarget-iCur)/10;   //除数越大到最后越慢
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if(attr == "opacity"){           // 考虑opacity透明度
				obj.style.opacity = (iCur+iSpeed)/100; 
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")";  //opacity兼容情况
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}
			
			if(iCur != iTarget){
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

