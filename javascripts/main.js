$(function () {

 // появление объектов на главной странице
 setTimeout( "jQuery('.h').show();",14000 );

 // клик на белые круги
 $(".circle1").click(function(){
   $(this).css("background-color", "#0092FF");
   $(".rec1").css("display", "block");
   $(".render_1 p:nth-of-type(1)").css("display", "block");
 });
 $(".circle2").click(function(){
   $(this).css("background-color", "#0092FF");
   $(".rec2").css("display", "block");
   $(".render_1 p:nth-of-type(2)").css("display", "block");
 });
 $(".circle3").click(function(){
   $(this).css("background-color", "#0092FF");
   $(".rec3").css("display", "block");
   $(".render_1 p:nth-of-type(3)").css("display", "block");
 });

 // переход к разделам
 $(".render_1 p:nth-of-type(1)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block1").offset().top
   }, 1000);
   $(".knopka1").addClass("knopka4");
   $(".block1").addClass("open1");
   $(".block1-t").removeClass("hidden");
 });
 $(".render_1 p:nth-of-type(2)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block2").offset().top
   }, 1500);
   $(".knopka2").addClass("knopka4");
   $(".block2").addClass("open2");
   $(".cont").removeClass("hidden");
 });
 $(".render_1 p:nth-of-type(3)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block3").offset().top
   }, 2000);
   $(".knopka3").addClass("knopka4");
   $(".block3").addClass("open3");
   $(".cont3").removeClass("hidden");
 });

 // открытие разделов
 $(".knopka1").click(function(){
   $(this).toggleClass("knopka4");
   $(".block1").toggleClass("open1");
   $(".block1-t").toggleClass("hidden");
 });
 $(".knopka2").click(function(){
   $(this).toggleClass("knopka4");
   $(".block2").toggleClass("open2");
   $(".cont").toggleClass("hidden");
 });
 $(".knopka3").click(function(){
   $(this).toggleClass("knopka4");
   $(".block3").toggleClass("open3");
   $(".cont3").toggleClass("hidden");
 });

// текст при наведении_появление
$(".bl-text p:nth-of-type(1)").hover(function() {
  $(".text-hover p:nth-of-type(1)").css("opacity", "1");
});
$(".bl-text p:nth-of-type(2)").hover(function() {
 $(".text-hover p:nth-of-type(2)").css("opacity", "1");
});
$(".bl-text p:nth-of-type(3)").hover(function() {
 $(".text-hover p:nth-of-type(3)").css("opacity", "1");
});
$(".bl-text p:nth-of-type(4)").hover(function() {
 $(".text-hover p:nth-of-type(4)").css("opacity", "1");
});
$(".bl-text p:nth-of-type(5)").hover(function() {
 $(".text-hover p:nth-of-type(5)").css("opacity", "1");
});

// текст при наведении_исчезновение
$(".bl-text p:nth-of-type(1)").mouseleave(function() {
 $(".text-hover p:nth-of-type(1)").css("opacity", "0");
});
$(".bl-text p:nth-of-type(2)").mouseleave(function() {
$(".text-hover p:nth-of-type(2)").css("opacity", "0");
});
$(".bl-text p:nth-of-type(3)").mouseleave(function() {
$(".text-hover p:nth-of-type(3)").css("opacity", "0");
});
$(".bl-text p:nth-of-type(4)").mouseleave(function() {
$(".text-hover p:nth-of-type(4)").css("opacity", "0");
});
$(".bl-text p:nth-of-type(5)").mouseleave(function() {
$(".text-hover p:nth-of-type(5)").css("opacity", "0");
});

// горизонтальный скролл
// $("cont3").addEvent('mouseover', scroll.start.bind(scroll));
// $("cont3").addEvent('mouseout', scroll.stop.bind(scroll));




});
