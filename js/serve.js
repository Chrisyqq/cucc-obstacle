/**
 * Created by ym-zrl on 16/6/12.
 */
$(document).ready(function () {
    //login head
    
    var serveCircleIcon=$('.serve-circle-icon i');
    var accountNumber=1027+"****"+125695456474;
    var accountNumberAll="账号:"+1027+"****"+125695456474;
    if($(window).width()>='1170'){
        serveCircleIcon.removeClass('icon-30');
        serveCircleIcon.addClass('icon-person01');
        $('.information-account-number').text(accountNumberAll);
        $('.index-account-number').text(accountNumberAll);
        $('.information-two').css('display','block');
        $('.bind-tip-list .list-tip').css('display','block');
        //web-load
        $('.web-load').css('display','block');
        $('.phone-load').css('display','none');
    }
    if($(window).width()<'1170'){
        $('.web-load').css('display','none');
        $('.phone-load').css('display','block');
        serveCircleIcon.removeClass('icon-person01');
        serveCircleIcon.addClass('icon-30');
        $('.information-account-number').text(accountNumber);

        $('.index-account-number').text(accountNumberAll);
        $('.index-serve-head-right').css('display','none');
        $('.index-information-three').css('display','block');
    }

    //login
    //身份证登陆未填写内容提示
    $('.login-id-next').click(function () {
        var idname=$('#identitycardName').val();
        var idpassworld=$('#identitycardPassworld').val();
        var idnk=$('.identitycard-passWorld-number');
        var shakespan=$('.login-prompt').children(':first');
        if(idname==''){
            idnk.text('请输入开户名');
            shakespan.addClass('shake');
        }else{
            if(idname=='123'){
                if(idpassworld==''){
                    idnk.text('请输入身份证号');
                    shakespan.addClass('shake');
                }else{
                    if(idpassworld=='123'){
                        idnk.text('');
                    //  密码正确之后的操作
                        $('.identitycard').css('display','none');
                        $('.login-view-success').css('display','block')
                    }else {
                        idnk.text('身份证号码错误');
                        shakespan.addClass('shake');
                    }
                }
            }else{
                if(idpassworld==''){
                    idnk.text('请输入身份证号');
                    shakespan.addClass('shake');
                }else{
                    if(idpassworld=='123'){
                        idnk.text('');


                    }else {
                        idnk.text('开户名或身份证号码错误');
                        shakespan.addClass('shake');
                    }
                }
            }
        }
        setTimeout(removeClass, 1000);
    });

    //身份证登陆未填写内容提示
    $('.login-broadband-next').click(function () {
        var bdname=$('#broadbandNumber').val();
        var bdpassworld=$('#broadbandPassworld').val();
        var bdnk=$('.broadband-passWorld-number');
        var bdshakespan=$('.broadband .login-prompt').children(':first');
        if(bdname==''){
            bdnk.text('请输入宽带账号');
            bdshakespan.addClass('shake');
        }else{
            if(bdname=='123'){
                if(bdpassworld==''){
                    bdnk.text('请输入宽带密码');
                    bdshakespan.addClass('shake');

                }else{
                    if(bdpassworld=='123'){
                        bdnk.text('');
                        //  密码正确之后的操作
                        $('.broadband').css('display','none');
                        $('.login-view-success').css('display','block')
                    }else {
                        bdnk.text('宽带密码错误');
                        bdshakespan.addClass('shake');
                    }
                }
            }else{
                if(bdpassworld==''){
                    bdnk.text('请输入宽带密码');
                    bdshakespan.addClass('shake');
                }else{
                    if(bdpassworld=='123'){
                        bdnk.text('');


                    }else {
                        bdnk.text('宽带密码或宽带账号错误');
                        bdshakespan.addClass('shake');
                    }
                }
            }
        }
        setTimeout(bdremoveClass, 1000);
    });

    //shake 提示
    function bdremoveClass(){
        var bdshakespan=$('.broadband .login-prompt').children(':first');
        bdshakespan.removeClass('shake');
    }
    function removeClass(){
        var shakespan=$('.identitycard .login-prompt').children(':first');
        shakespan.removeClass('shake');
    }


    $('.login-way-one').click(function () {
        if($('.login-view-success').css('display')=='none'){
            if($('.login-way-one').hasClass('login-active')){
            }else{
                $('.login-way-one').addClass('login-active');
                $('.login-way-two').removeClass('login-active');
                $('.login-right .left').css('display','block');
                $('.login-right .right').css('display','none')
            }
        }

    });
    $('.login-way-two').click(function () {
        if($('.login-view-success').css('display')=='none'){
            if($('.login-way-two').hasClass('login-active')){

            }else {
                $('.login-way-two').addClass('login-active');
                $('.login-way-one').removeClass('login-active');
                $('.login-right .left').css('display','none');
                $('.login-right .right').css('display','block')
            }
        }
    });
    // $('.login-next').click(function () {
    //         if($('.login-next').text('登录')){
    //             $('.login-next').text('正在处理');
    //             $('.login-next').css('background','#a7a7a7')
    //         }else {
    //
    //         }
    // }
    // );
    $('.login-way-two').click(function () {
        if($('.login-view-success').css('display')=='none'){
            if($('.login-way-two').hasClass('login-active')){

            }else {
                $('.login-way-two').addClass('login-active');
                $('.login-way-one').removeClass('login-active');
                $('.login-right .left').css('display','none');
                $('.login-right .right').css('display','block')
            }
        }
    });





});
