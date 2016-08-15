/**
 * Created by ym-zrl on 16/6/12.
 */
//

var test={
    "lineTest":[{
        "lineStateTrue":"正常",
        "lineStateWhen":"检测中",
        "lineStatePhone":"已停机",
        "lineStateRoute":"断线",
        "lineStateStyleContent":"我也不知道",
        "lineStateSpeed":"一般快",
        "lineStateSearchMessage":"什么鬼"
    }]
};
var StateTrue=test.lineTest[0].lineStateTrue;
var StateWhen=test.lineTest[0].lineStateWhen;
var StatePhone=test.lineTest[0].lineStatePhone;
var StateRoute=test.lineTest[0].lineStateRoute;
var StyleContent=test.lineTest[0].lineStateStyleContent;
var StateSpeed=test.lineTest[0].lineStateSpeed;
var StateSearchMessage=test.lineTest[0].lineStateSearchMessage;
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
        var vChild=v.children(':first')
        vChild.removeClass('icon-zhongfujiazai')
        vChild.addClass('icon-sure')
        var appearState=v.next().children(':last')
        appearState.text(StateTrue)
        var vParents=v.parents().next().children(':last').children(':last')
        vParents.text(StateWhen)
    },
    serveCirclLineWrong: function (v,s) {
        v.removeClass('line-load');
        var vChild=v.children(':first')
        vChild.removeClass('icon-zhongfujiazai')
        vChild.addClass('icon-tanhao')
        var appearState=v.next().children(':last')
        appearState.text(s);
        appearState.css('color','#ffb30f');
        var vParents=v.parents().next().children(':last').children(':last')
        vParents.text(StateWhen)
    }
}
var precent=0;
function startCircle(){

    if(precent<100){
        precent=precent+1;
        switch (precent){
            case 20:
                var v=$('.serve-circle-line .one');
                var s=StyleContent;
                testCl.serveCirclLineSure(v,s);
                break;
            case 40:
                var v=$('.serve-circle-line .two');
                var s=StateRoute;
                testCl.serveCirclLineWrong(v,s);
                break;
            case 60:
                var v=$('.serve-circle-line .three');
                var s=StateSearchMessage;
                testCl.serveCirclLineSure(v,s);
                break;
            case 80:
                var v=$('.serve-circle-line .four');
                var s=StatePhone;
                testCl.serveCirclLineWrong(v,s);
                break;
            case 100:
                var v=$('.serve-circle-line .five');
                var s=StateSpeed;
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
};

function progresssetout() {
    setTimeout(
        function(){
            $('#alldelete').css('display','block')
        },6000);
}

