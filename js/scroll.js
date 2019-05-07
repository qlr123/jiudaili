var speed=50;
var demo2=document.getElementById("CW_dong2");
var demo1=document.getElementById("CW_dong1");
var demo=document.getElementById("CW_dong");
demo2.innerHTML=demo1.innerHTML;
function Marquee1(){
if(demo2.offsetTop-demo.scrollTop<=0){
   demo.scrollTop-=demo1.offsetHeight;
}
else{
   demo.scrollTop++;
}
}
var MyMar=setInterval(Marquee1,speed);
demo.onmouseover=function() {clearInterval(MyMar)};
demo.onmouseout=function() {MyMar=setInterval(Marquee1,speed)};