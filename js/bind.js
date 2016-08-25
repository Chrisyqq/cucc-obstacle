/**
 * Created by ym-zrl on 16/6/12.
 */
$(document).ready(function () {
    //login head
    var serveCircleIcon=$('.serve-circle-icon i');
    var accountNumber=1027+"****"+125695456474;
    var accountNumberAll="账号:"+1027+"****"+125695456474;
    if($(window).width()>='1170'){
        serveCircleIcon.removeClass('icon-31');
        serveCircleIcon.addClass('icon-person01');
        $('.information-account-number').text(accountNumberAll);
        $('.bind-tip-list .list-tip').css('display','block');
        $('.information-two').css('display','block');
        $('.serve-head').css('display','block');
    }else {
        serveCircleIcon.removeClass('icon-person01');
        serveCircleIcon.addClass('icon-31');
        $('.information-account-number').text(accountNumber);
        $('.bind').append('<div class="bind-head">请选择故障现象</div>')
    }
    
    //login
    $('.login-way-one').click(function () {
        if($('.login-way-one').hasClass('login-active')){
        }else{
            $('.login-way-one').addClass('login-active');
            $('.login-way-two').removeClass('login-active');
            $('.login-right .left').css('display','block');
            $('.login-right .right').css('display','none')
        }
    });
    $('.login-way-two').click(function () {
        if($('.login-way-two').hasClass('login-active')){

        }else {
            $('.login-way-two').addClass('login-active');
            $('.login-way-one').removeClass('login-active');
            $('.login-right .left').css('display','none');
            $('.login-right .right').css('display','block')
        }
    });
    $('.login-next').click(function () {
            if($('.login-next').text('登录')){
                $('.login-next').text('正在处理');
                $('.login-next').css('background','#a7a7a7')
            }else {

            }
    }
    );

    // setInterval(function () {
    //     startCircle();
    // }, 100);

});
