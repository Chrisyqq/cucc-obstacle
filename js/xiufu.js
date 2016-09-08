/**
 * Created by ym-zrl on 16/6/12.
 */
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
    serveCircleIcon.removeClass('icon-person01');
    serveCircleIcon.addClass('icon-30');
    $('.information-account-number').text(accountNumber);

    $('.index-account-number').text(accountNumberAll);
    $('.index-serve-head-right').css('display','none');
    $('.index-information-three').css('display','block');
}

