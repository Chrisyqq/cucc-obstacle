/**
 * Created by Chris on 16/8/26.
 */
var diagnosetitle={
    broadbandtitle:"停机了",
    mmtitle:"密码错了",
    lymmtitle:"密码错的",
    lytmmtitle:"密码正确"
};
//broadBand
function broadBandmove(){
    var title=diagnosetitle.broadbandtitle;
    $('.broad-band .broad-band-title').text(title);
}

function broadBandAddWord(){
    var word="没有冲话费肯定听几楼";
    $('.broad-band .broad-band-word').text(word);
}

//宽带密码错误
function mmmove(){
    var title=diagnosetitle.mmtitle;
    $('.broad-band .broad-band-title').text(title);
}
function mmAddWord(){
    var word="经过小翼飞快地检测，发现您把重要的宽带密码给输错啦，先验证一下！";
    $('.broad-band .broad-band-word').text(word);
}
//路由器重置密码错误
function lymmmove(){
    var title=diagnosetitle.lymmtitle;
    $('.broad-band .broad-band-title').text(title);
}
function lymmAddWord(){
    var word="路由器密码重置也是需要的哈，如果还是不行，赶紧联系客服MM重置密码。";
    $('.broad-band .broad-band-word').text(word);
}
//路由器重置密码正确
function lytmmmove(){
    var title=diagnosetitle.lytmmtitle;
    $('.broad-band .broad-band-title').text(title);
}
function lytmmAddWord(){
    var word="注意大小写再输入一遍，路由器的密码也要记得修改哈~";
    $('.broad-band .broad-band-word').text(word);
}