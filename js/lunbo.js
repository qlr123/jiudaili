function Lunbo(name){
	this.banner = document.getElementsByClassName(name)[0];
	this.list = this.banner.children[0];	
	this.aList = this.list.children;
	this.perWidth = this.aList[0].offsetWidth;
	this.list.style.width = this.perWidth*this.aList.length +"px";
	this.count = 0;
	this.banner.onmouseover = ()=>{
		clearInterval(this.timer);
	};
	this.banner.onmouseout = ()=>{
		this.autoPlay();
	}
}
Lunbo.prototype.autoPlay = function(){	
	this.timer = setInterval(()=>{
		this.move();
	},2000);	
}
Lunbo.prototype.getNum = function(name){
	this.nums = document.getElementsByClassName(name)[0];
	this.aNums = this.nums.children;
	this.aNums[0].className = "hover";
	
	
	
	for(let i = 0;i<this.aNums.length;i++){
		this.aNums[i].onmouseover = ()=>{
			this.count = i-1;
			this.move();
			for(let j =0;j<this.aNums.length;j++){
				this.aNums[j].className="";
			}
			this.aNums[i].className="hover";
		}
	}
}
Lunbo.prototype.getText = function(name){
	this.oText = document.getElementsByClassName(name)[0];
	this.aText = this.oText.children[0].children;
}
Lunbo.prototype.move=function(){
	this.count++;
	if(this.count == this.aList.length){
		this.list.style.left = 0;
		this.count = 1;  
	}
	if(this.count == -1){
		this.list.style.left = -this.perWidth*(this.aList.length-1)+"px";
		this.count = this.aList.length-2;
	}
	
	for(let j = 0; j < this.aNums.length; j++){
		this.aNums[j].className = "";
	}
	
	if(this.count == this.aList.length - 1){
		this.aNums[0].className = "hover";
	}else{
		this.aNums[this.count].className = "hover";
	}
	startMove(this.list,{left:-this.perWidth*this.count});
}
Lunbo.prototype.getBtn = function(name){
	this.oBtn = document.getElementsByClassName(name)[0];
	this.oSpan = this.oBtn.children;
	this.oSpan[0].onclick = ()=>{
		this.count -=2;
		this.move();
	}
	this.oSpan[1].onclick = ()=>{
		this.move();
	}
}
Lunbo.prototype.dongText = function(){
	for(let j = 0; j < this.aNums.length; j++){
		this.aNums[j].className = "";
		this.aText[j].style.display = "none"
	}
	
	if(this.count == this.aList.length - 1){
		this.aNums[0].className = "hover";
		this.aText[0].style.display = "block"
	}else{
		this.aNums[this.count].className = "hover";
		this.aText[0].style.display = "block"
	}
}
