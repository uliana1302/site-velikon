$(function () {

 // появление объектов на главной странице
 setTimeout( "jQuery('.h').show();",14000 );


 // клик на белые круги
 // о нас
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
 // тур
 $(".circle2-1").click(function(){
   $(this).css("background-color", "#0092FF");
   $(".rec2-1").css("display", "block");
   $(".render_2 p").css("display", "block");
 });
 // контакты
 $(".circle7-1").click(function(){
   $(this).css("background-color", "white");
   $(".rec7-1").css("display", "block");
   $(".render_7 p:nth-of-type(1)").css("display", "block");
 });
 $(".circle7-2").click(function(){
   $(this).css("background-color", "#0092FF");
   $(".rec7-2").css("display", "block");
   $(".render_7 p:nth-of-type(2)").css("display", "block");
 });
 $(".circle7-3").click(function(){
   $(this).css("background-color", "white");
   $(".rec7-3").css("display", "block");
   $(".render_7 p:nth-of-type(3)").css("display", "block");
 });
 $(".circle7-4").click(function(){
   $(this).css("background-color", "white");
   $(".rec7-4").css("display", "block");
   $(".render_7 p:nth-of-type(4)").css("display", "block");
 });
 $(".circle7-5").click(function(){
   $(this).css("background-color", "white");
   $(".rec7-5").css("display", "block");
   $(".render_7 p:nth-of-type(5)").css("display", "block");
 });
 $(".circle7-6").click(function(){
   $(this).css("background-color", "white");
   $(".rec7-6").css("display", "block");
   $(".render_7 p:nth-of-type(6)").css("display", "block");
 });


 // скролл и открытие разделов
 // о нас
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
 // тур
 $(".render_2 p").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block2-1").offset().top
   }, 1000);
   $(".knopka2-1").addClass("knopka4");
   $(".block2-1").addClass("open2-1");
   $(".tour").removeClass("hidden");
 });
 // контакты
 $(".render_7 p:nth-of-type(2)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block7-1").offset().top
   }, 1000);
   $(".knopka7-1").addClass("knopka4");
   $(".block7-1").addClass("open7-1");
   $(".contacts").removeClass("hidden");
 });


 // открытие разделов по клику на кнопку
 // о нас
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
 // тур
 $(".knopka2-1").click(function(){
   $(this).toggleClass("knopka4");
   $(".block2-1").toggleClass("open2-1");
   $(".tour").toggleClass("hidden");
 });
  // контакты
  $(".knopka7-1").click(function(){
    $(this).toggleClass("knopka4");
    $(".block7-1").toggleClass("open7-1");
    $(".contacts").toggleClass("hidden");
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
