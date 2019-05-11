//这个构造函数是为了生成实例的
function Banner(id){
	this.banner = document.getElementById(id);
	this.bannerList = this.banner.children[0];
	this.lists = this.bannerList.children;
	
	this.count = 0;
	this.banner.onmouseover = ()=>{
		clearInterval(this.timer);
	};
	this.banner.onmouseout = ()=>{
		this.autoPlay();
	}
}
Banner.prototype.move = function(){
	this.count++;
	//123123的临界值控制
	if(this.count==this.lists.length){
		this.count = 0;
	}
	//321321的临界值
	if(this.count==-1){
		
		this.count = this.lists.length-1;
	}
	
	//控制角标点亮 添加hover这个类名
	for(let j = 0; j < this.anums.length; j++){
		this.anums[j].className = "";
	}
	
	this.anums[this.count].className = "hover";
	
	
	for(let i = 0; i<this.lists.length;i++){
		startMove(this.lists[i],{opacity:0});
	}

	startMove(this.lists[this.count],{opacity:100});
} 
Banner.prototype.autoPlay = function(){
	this.timer = setInterval(()=>{
		this.move();
	},4000);
}
Banner.prototype.createBtns = function(){
	this.btns = document.getElementById("btns");
	this.btns.innerHTML = "<span></span><span></span>";
	this.abtns = this.btns.children;
	this.abtns[0].onclick = ()=>{
		this.count=0;
		this.move();
	}
	this.abtns[1].onclick = ()=>{
		this.move();
	}
}

Banner.prototype.createNums = function(){
	this.nums = document.getElementById("nums");
	var str = "";
	for(let i = 0; i < this.lists.length; i++){
		str += "<li>"+"</li>";
	}
	this.nums.innerHTML = str;
	this.anums = this.nums.children;
	this.anums[0].className = "hover";
	
	for(let i = 0; i < this.anums.length; i++){
		this.anums[i].onmouseover = ()=>{
			this.count = i-1;
			this.move();
			for(let j = 0; j < this.anums.length; j++){
				this.anums[j].className = "";
			}
			this.anums[i].className = "hover";
		}
	}
	
	
}