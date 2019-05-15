//存一个数据
function setCookie(name,val,t){
//储存名称name,值为val,储存天数t
    var oDate=new Date()
    //设置日期时间
    //t=t?t:0;
    if(!t){
        t=0;
    }
    oDate.setDate(oDate.getDate()+t)
    document.cookie=name+"="+val+";expires="+oDate;
}
//获取某一个cookie值
function getCookie(name){
    var str=document.cookie
    var arrStr=str.split("; ")
    //遍历数组
    for(var i = 0; i < arrStr.length;i++){
        var arr=arrStr[i].split("=")
        if(arr[0]==name){
            return arr[1]
        }
    }
}
//删除指定的数据
function removeCookie(name){
    setCookie(name,"",-1)
}