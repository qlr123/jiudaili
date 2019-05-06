function getStyle(domObj, attr) {
	if(window.getComputedStyle) {
		return getComputedStyle(domObj, null)[attr];
	}
	return domObj.currentStyle[attr];
}

function startMove(domObj,json,fn) {
	clearInterval(domObj.timer);
	domObj.timer = setInterval(function() {
		//假设每一次变化之前，所有的属性都达到目标值
		var flag = true;
		for(var attr in json) {
			var iTarget = parseInt(json[attr]);
			if(attr == "opacity"){
				var iCur = parseInt(getStyle(domObj, "opacity")*100);
			}else{
				var iCur = parseInt(getStyle(domObj, attr));
			}
			var iSpeed = (iTarget - iCur) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if(attr == "opacity"){
				domObj.style.opacity = (iCur + iSpeed)/100;
				domObj.style.filter = "alpha(opacity="+(iCur + iSpeed)+")";
			}else{
				domObj.style[attr] = iCur + iSpeed + "px";
			}
			

			//保证所有的属性都达到目标值之后再去清
			if(iSpeed != 0) {
				flag = false;
			}
		}

		if(flag) {
			clearInterval(domObj.timer);
			if(fn){
				fn();
			}
		}

	}, 20);
}