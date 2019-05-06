function getStyle(domObj, attr) {
	if (window.getComputedStyle) {
		return getComputedStyle(domObj, null)[attr];
	}
	return domObj.currentStyle[attr];
}

function startMove(domObj, json, fn) {
	clearInterval(domObj.timer);
	domObj.timer = setInterval(function() {
		//假设每一次变化之前，所有的属性都达到目标值
		var flag = true;
		for (var attr in json) {
			var iTarget = parseInt(json[attr]);
			if (attr == "opacity") {
				var iCur = parseInt(getStyle(domObj, "opacity") * 100);
			} else {
				var iCur = parseInt(getStyle(domObj, attr));
			}
			var iSpeed = (iTarget - iCur) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

			if (attr == "opacity") {
				domObj.style.opacity = (iCur + iSpeed) / 100;
				domObj.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
			} else {
				domObj.style[attr] = iCur + iSpeed + "px";
			}


			//保证所有的属性都达到目标值之后再去清
			if (iSpeed != 0) {
				flag = false;
			}
		}

		if (flag) {
			clearInterval(domObj.timer);
			if (fn) {
				fn();
			}
		}

	}, 20);
}

//这个构造函数是为了生成实例的
function Banner(id) {
	this.banner = document.getElementById(id);
	this.bannerList = this.banner.children[0];
	this.lists = this.bannerList.children;
	this.perWidth = this.lists[0].offsetWidth;
	this.bannerList.style.width = this.perWidth * this.lists.length + "px";
	this.count = 0;
	this.banner.onmouseover = () => {
		clearInterval(this.timer);
	};
	this.banner.onmouseout = () => {
		this.autoPlay();
	}
}
Banner.prototype.move = function() {
	this.count++;
	//123123的临界值控制
	if (this.count == this.lists.length) {
		this.bannerList.style.left = 0;
		this.count = 1;
	}
	//321321的临界值
	if (this.count == -1) {
		this.bannerList.style.left = -this.perWidth * (this.lists.length - 1) + "px";
		this.count = this.lists.length - 2;
	}

	//控制角标点亮 添加hover这个类名
	for (let j = 0; j < this.anums.length; j++) {
		this.anums[j].className = "";
	}
	if (this.count == this.lists.length - 1) {
		this.anums[0].className = "hover";
	} else {
		this.anums[this.count].className = "hover";
	}



	startMove(this.bannerList, {
		left: -this.perWidth * this.count
	});
}
Banner.prototype.autoPlay = function() {
	this.timer = setInterval(() => {
		this.move();
	}, 3000);
}
Banner.prototype.createBtns = function() {
	this.btns = document.getElementById("btns");
	this.btns.innerHTML = "<span>&lt;</span><span>&gt;</span>";
	this.abtns = this.btns.children;
	this.abtns[0].onclick = () => {
		this.count -= 2;
		this.move();
	}
	this.abtns[1].onclick = () => {
		this.move();
	}
}

Banner.prototype.createNums = function() {
	this.nums = document.getElementById("nums");
	var str = "";
	for (let i = 0; i < this.lists.length - 1; i++) {
		str += "<li>" + (i + 1) + "</li>";
	}
	this.nums.innerHTML = str;
	this.anums = this.nums.children;
	this.anums[0].className = "hover";

	for (let i = 0; i < this.anums.length; i++) {
		this.anums[i].onmouseover = () => {
			this.count = i - 1;
			this.move();
			for (let j = 0; j < this.anums.length; j++) {
				this.anums[j].className = "";
			}
			this.anums[i].className = "hover";
		}
	}


}


/* 回到页面顶部 */
window.onscroll = function() {
	function dingbu() {
		var zhiding = document.getElementById("zhiding");
		var fanhui = document.documentElement.scrollTop;
		if (fanhui > 300) {
			zhiding.style.display = "block";
		} else {
			zhiding.style.display = "none";
		}
	}
	dingbu();
}
zhiding.onclick = function() {
	document.documentElement.scrollTop = 0;
}
