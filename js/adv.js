// JavaScript Document
function $$(x){
    return document.getElementById(x);
}
//标题 .title
var pushName = [];
//图片 .image
var pushSrc = [];
//链接 .link
var pushLink = []
var pushShow = "";
var mainPushNum = 0;
var rollId = null;

function rnd() {
    rnd.seed = (rnd.seed * 9301 + 49297) % 233280;
    return rnd.seed / (233280.0);
}

function rand(number) {
    return Math.ceil(rnd() * number) - 1;
}
function showPushLink(num) {
    if (!num && num != 0) {
        mainPushNum++;
        if (mainPushNum > 3) mainPushNum = 0;
        num = mainPushNum;
    }
    for (i = 0; i < 4; i++) {
        $("#linkPush" + i).removeClass("linkPushHere");
        $("#linkPush" + i).html(pushName[i]);
    }
    $("#linkPush" + num).addClass("linkPushHere");
    $("#linkPush" + num).html(pushName[num]);
    $("#pushImg").attr("src", pushSrc[num]);
    $("#pushImgLink").attr("href",pushLink[num]);
    $("#pushImg").attr("alt", pushName[num]);
}
function showAtTime() {
    showPushLink();
    rollId = setInterval("showPushLink()", 2000);
}

$(function () {
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/operation/",
        data: { action: "getAdvList" },
        success: function (json) {
            var retObj = eval(json);
            for (var i = 0; i < retObj.length; i++) {
                pushName.push(retObj[i]["Ad_Title"]);
                pushSrc.push("http://image.9928.tv" + retObj[i]["Ad_Pic"]);
                pushLink.push(retObj[i]["Ad_Url"]);
            } 
            
            //初始化
            for (i = 0; i < 4; i++) {
                pushShow += '<a href="' + pushLink[i] + '" onmouseover="showPushLink(' + i + ');clearInterval(rollId)" id="linkPush' + i + '" target="_blank">' + pushName[i] + '</a>';
            }
            $("#linkPush").html(pushShow);

            $("#linkPush" + mainPushNum).attr("class", "linkPushHere");
            $("#linkPush" + mainPushNum).html(pushName[mainPushNum]);

            $("#mainPush").html('<a href="' + pushLink[mainPushNum] + '" target="_blank" id="pushImgLink" onmouseover="clearInterval(rollId)" onmouseout="showAtTime()"><img src="' + pushSrc[mainPushNum] + '" name="pushImg"  id="pushImg" alt="' + pushName[mainPushNum] + '" /></a>');
            showPushLink();

            rollId = setInterval("showPushLink()", 2000);
        }
    });



})
