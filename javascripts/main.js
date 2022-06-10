$(function () {

 // появление объектов на главной странице
 setTimeout( "jQuery('.h').show();",14000 );

 // появление названий разделов при наведении
 $(".block-chemodan").hover(function(){
   $(".p-chemodan").css("opacity", "1");
 });
 $(".block-map").hover(function(){
   $(".p-map").css("opacity", "1");
 });
 $(".block-hand").hover(function(){
   $(".p-hand").css("opacity", "1");
 });
 $(".block-sign").hover(function(){
   $(".p-sign").css("opacity", "1");
 });
 $(".block-pugov").hover(function(){
   $(".p-pugov").css("opacity", "1");
 });
 $(".block-kolon").hover(function(){
   $(".p-kolon").css("opacity", "1");
 });
 $(".block-korzina").hover(function(){
   $(".p-korzina").css("opacity", "1");
 });

 $(".block-chemodan").mouseleave(function(){
   $(".p-chemodan").css("opacity", "0");
 });
 $(".block-map").mouseleave(function(){
   $(".p-map").css("opacity", "0");
 });
 $(".block-hand").mouseleave(function(){
   $(".p-hand").css("opacity", "0");
 });
 $(".block-sign").mouseleave(function(){
   $(".p-sign").css("opacity", "0");
 });
 $(".block-pugov").mouseleave(function(){
   $(".p-pugov").css("opacity", "0");
 });
 $(".block-kolon").mouseleave(function(){
   $(".p-kolon").css("opacity", "0");
 });
 $(".block-korzina").mouseleave(function(){
   $(".p-korzina").css("opacity", "0");
 });

 // клик на кнопку информации
   // $(".info-circle").toggleClass("click");

});
