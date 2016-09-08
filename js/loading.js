/**
 * Created by ym-zrl on 16/6/12.
 */
//

var test={
    "lineTest":[{
        "lineStateTrue":"正常",
        "lineStateWhen":"检测中",
        "lineStateWrong":"异常",
        "workCheckHave":"有工单",
        "localityFault":"有故障"
    }],
    "lineName":[{
        "serveState":"服务状态",
        "workCheck":"工单检测",
        "localityFault":"区域性故障",
        "accountState":"账号使用状态",
        "useSpeed":"使用速率"
    }]
};
var StateTrue=test.lineTest[0].lineStateTrue;
var StateWhen=test.lineTest[0].lineStateWhen;
var StateWrong=test.lineTest[0].lineStateWrong;
var checkHave=test.lineTest[0].workCheckHave;
var localityFault=test.lineTest[0].localityFault;

var titleserveState=test.lineName[0].serveState;
var titleworkCheck=test.lineName[0].workCheck;
var titlelocalityFault=test.lineName[0].localityFault;
var titleaccountState=test.lineName[0].accountState;
var titleuseSpeed=test.lineName[0].useSpeed;
var testCl={
    serveCircleState: function () {
        $('.serve-circle-state').text('正在检查中');
        $('.serve-circle-state').css({'font-size':'22px','text-align':'center'})
    },
    serveCircleOver: function () {
        $('.serve-circle-state').text('检查完毕');
        $('.serve-circle-state').css({'font-size':'22px','text-align':'center'})
    },
    serveCirclLineSure: function (v,s) {
        v.removeClass('line-load');
        v.html('<i class="iconfont icon-sure"></i>');
        var appearState=v.next().children(':last');
        appearState.text(StateTrue);
    },
    serveCirclLineWrong: function (v,s) {
        v.removeClass('line-load');
        v.html('<i class="iconfont icon-tanhao"></i>');
        var appearState=v.next().children(':last');
        appearState.text(s);
        appearState.css('color','#ffb30f');
    },
    serveCirclLineWhen: function (z,title) {
        z.html('<div class="byMy-load"><i class="iconfont icon-jiazai"></div></i>');
        var appearStateWhen=z.next().children(':last');
        appearStateWhen.text();
        var appearStateTitle=z.next().children(':first');
        appearStateTitle.text(title);
        var appearStateTitle=z.next().children(':last');
        appearStateTitle.text(StateWhen);
    }
};
var precent=0;

function startCircle(){

    if(precent<100){
        precent=precent+1;
        switch (precent){
            case 1:
                var z=$('.serve-circle-line .one');
                var title=titleserveState
                testCl.serveCirclLineWhen(z,title);
                break;
            case 20:
                var v=$('.serve-circle-line .one');
                var z=$('.serve-circle-line .two');
                var s=StateTrue;
                var title=titleworkCheck
                testCl.serveCirclLineSure(v,s);
                testCl.serveCirclLineWhen(z,title);
                break;
            case 40:
                var v=$('.serve-circle-line .two');
                var z=$('.serve-circle-line .three');
                var s=checkHave;
                var title=titlelocalityFault
                testCl.serveCirclLineWrong(v,s);
                testCl.serveCirclLineWhen(z,title);
                break;
            case 60:
                var v=$('.serve-circle-line .three');
                var z=$('.serve-circle-line .four');
                var s=localityFault;
                var title=titleaccountState
                testCl.serveCirclLineWrong(v,s);
                testCl.serveCirclLineWhen(z,title);
                break;
            case 80:
                var v=$('.serve-circle-line .four');
                var z=$('.serve-circle-line .five');
                var s=StateWrong;
                var title=titleuseSpeed
                testCl.serveCirclLineWrong(v,s);
                testCl.serveCirclLineWhen(z,title);
                break;
            case 100:
                var v=$('.serve-circle-line .five');
                var s=StateTrue;
                testCl.serveCirclLineSure(v,s);

        }
        testCl.serveCircleState();
        var num = precent * 3.6;
        $('.circle').find('span').text(precent);
        if (num<=180) {
            $('.circle').find('.sm-pie_scan').css('transform', "rotate(" + num + "deg)");
            $('.circle').find('.right').css('transform', "rotate(" + num + "deg)");
        } else {
            $('.circle').find('.sm-pie_scan').css('transform', "rotate(" + num + "deg)");
            $('.circle').find('.sm-pie_left').css('z-index', "0");
            $('.circle').find('.right').css('transform', "rotate(180deg)");
            $('.circle').find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
        }
    }else {
        testCl.serveCircleOver();
        clearInterval(function () {
            startCircle();
        })
    }

}
function processerbarq(time){

    $("#line").each(function(i,item){
        var a=parseInt($(item).attr("w"));
        $(item).animate({
            width: a+"%"
        },time);
    });
    var si = window.setInterval(
        function(){
            a=$("#line").width();
            if(window.screen.width<=1200){
                b=(a/100*100).toFixed(0);
            }else {
                b=(a/600*100).toFixed(0);
            }
            document.getElementById('percent').innerHTML=b+"%";
            $('.load-precess').text(b+"%")
            document.getElementById('percent').style.left=a-30+"px";
            // document.getElementById('msg').innerHTML="上传中";
            // if(document.getElementById('percent').innerHTML=="100%") {
            //     clearInterval(si);
            //     document.getElementById('msg').innerHTML="&nbsp;&nbsp;成功";
            // }
        },70);
}
function processerbarsmall(time){

    $("#line").each(function(i,item){
        var a=parseInt($(item).attr("w"));
        $(item).animate({
            width: a+"%"
        },time);
    });
    var si = window.setInterval(
        function(){
            a=$("#line").width();
            if(window.screen.width<=1200){
                b=(a/278*100).toFixed(0);
            }else {
                b=(a/600*100).toFixed(0);
            }
            document.getElementById('percent').innerHTML=b+"%";
            $('.load-precess').text(b+"%")
            document.getElementById('percent').style.left=a-30+"px";
            // document.getElementById('msg').innerHTML="上传中";
            // if(document.getElementById('percent').innerHTML=="100%") {
            //     clearInterval(si);
            //     document.getElementById('msg').innerHTML="&nbsp;&nbsp;成功";
            // }
        },70);
}
function progresssetout() {
    setTimeout(
        function(){
            $('#alldelete').css('display','block')
        },6000);
}

$(document).ready(function () {
    //login head
    if($(window).width()>='1170'){
        //jinDu-Tiao

        processerbarq(6000);

    }
    if($(window).width()<'1170'){
        //loading circle
        setInterval(function () {
            startCircle();
        }, 100);
    }


});