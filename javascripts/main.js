$(function () {

 // появление объектов на главной странице и - прогресс бар
 setTimeout( "jQuery('.h').show();",14000 );
 setTimeout( "jQuery('.anim-t-d').hide();",14000 );

// остановка анимации по клику
 $(".t-d").click(function(){
   $(this).css("animation", "none");
   $(".anim-t-d").css("display", "none");
   setTimeout( "jQuery('.h').show();",100 );
 });


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
// музей
$(".circle3-1").click(function(){
  $(this).css("background-color", "#0092FF");
  $(".rec3-1").css("display", "block");
  $(".render_3 p:nth-of-type(1)").css("display", "block");
});
$(".circle3-2").click(function(){
  $(this).css("background-color", "#0092FF");
  $(".rec3-2").css("display", "block");
  $(".render_3 p:nth-of-type(2)").css("display", "block");
});
$(".circle3-3").click(function(){
  $(this).css("background-color", "#0092FF");
  $(".rec3-3").css("display", "block");
  $(".render_3 p:nth-of-type(3)").css("display", "block");
});
$(".circle3-4").click(function(){
  $(this).css("background-color", "#0092FF");
  $(".rec3-4").css("display", "block");
  $(".render_3 p:nth-of-type(4)").css("display", "block");
});
// события
$(".circle4-1").click(function(){
  $(this).css("background-color", "#0092FF");
  $(".rec4-1").css("display", "block");
  $(".render_4 p:nth-of-type(1)").css("display", "block");
});
$(".circle4-2").click(function(){
  $(this).css("background-color", "#0092FF");
  $(".rec4-2").css("display", "block");
  $(".render_4 p:nth-of-type(2)").css("display", "block");
});
// магазин
$(".circle5-1").click(function(){
  $(this).css("background-color", "#0092FF");
  $(".rec5-1").css("display", "block");
  $(".render_5 p:nth-of-type(1)").css("display", "block");
});
$(".circle5-2").click(function(){
  $(this).css("background-color", "#0092FF");
  $(".rec5-2").css("display", "block");
  $(".render_5 p:nth-of-type(2)").css("display", "block");
});
// faq
$(".circle6").click(function(){
  $(this).css("background-color", "#0092FF");
  $(".rec6").css("display", "block");
  $(".render_6 p:nth-of-type(1)").css("display", "block");
});
$(".circle6-2").click(function(){
  $(this).css("background-color", "#0092FF");
  $(".rec6-2").css("display", "block");
  $(".render_6 p:nth-of-type(2)").css("display", "block");
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
 // музей
 $(".render_3 p:nth-of-type(1)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block3-1").offset().top
   }, 1000);
   $(".knopka3-1").addClass("knopka4");
   $(".block3-1").addClass("open3-1");
   $(".block3-1-content").removeClass("hidden");
 });
 $(".render_3 p:nth-of-type(2)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block3-4").offset().top
   }, 1500);
   $(".knopka3-4").addClass("knopka4");
   $(".block3-4").addClass("open3-4");
   $(".block3-4-content").removeClass("hidden");
 });
 $(".render_3 p:nth-of-type(3)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block3-3").offset().top
   }, 2000);
   $(".knopka3-3").addClass("knopka4");
   $(".block3-3").addClass("open3-3");
   $(".block3-3-content").removeClass("hidden");
 });
 $(".render_3 p:nth-of-type(4)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block3-2").offset().top
   }, 2500);
   $(".knopka3-2").addClass("knopka4");
   $(".block3-2").addClass("open3-2");
   $(".block3-2-content").removeClass("hidden");
 });
 // события
 $(".render_4 p:nth-of-type(1)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block4-1").offset().top
   }, 1000);
   $(".knopka4-1").addClass("knopka4");
   $(".block4-1").addClass("open4-1");
   $(".block4-1-content").removeClass("hidden");
 });
 $(".render_4 p:nth-of-type(2)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block4-2").offset().top
   }, 1500);
   $(".knopka4-2").addClass("knopka4");
   $(".block4-2").addClass("open4-2");
   $(".block4-2-content").removeClass("hidden");
 });
 // магазин
 $(".render_5 p:nth-of-type(1)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block5-1").offset().top
   }, 1000);
   $(".knopka5-1").addClass("knopka4");
   $(".block5-1").addClass("open5-1");
   $(".block5-1-content").removeClass("hidden");
 });
 $(".render_5 p:nth-of-type(2)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block5-2").offset().top
   }, 1500);
   $(".knopka5-2").addClass("knopka4");
   $(".block5-2").addClass("open5-2");
   $(".block5-2-content").removeClass("hidden");
 });
 // FAQ
 $(".render_6 p:nth-of-type(1)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block6-1").offset().top
   }, 1000);
   $(".knopka6-1").addClass("knopka4");
   $(".block6-1").addClass("open6-1");
   $(".block6-1-content").removeClass("hidden");
 });
 $(".render_6 p:nth-of-type(2)").click(function(){
   $("html, body").animate( {
     scrollTop: $(".block6-2").offset().top
   }, 1500);
   $(".knopka6-2").addClass("knopka4");
   $(".block6-2").addClass("open6-2");
   $(".form").removeClass("hidden");
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
 // музей
 $(".knopka3-1").click(function(){
   $(this).toggleClass("knopka4");
   $(".block3-1").toggleClass("open3-1");
   $(".block3-1-content").toggleClass("hidden");
 });
 $(".knopka3-2").click(function(){
   $(this).toggleClass("knopka4");
   $(".block3-2").toggleClass("open3-2");
   $(".block3-2-content").toggleClass("hidden");
 });
 $(".knopka3-3").click(function(){
   $(this).toggleClass("knopka4");
   $(".block3-3").toggleClass("open3-3");
   $(".block3-3-content").toggleClass("hidden");
 });
 $(".knopka3-4").click(function(){
   $(this).toggleClass("knopka4");
   $(".block3-4").toggleClass("open3-4");
   $(".block3-4-content").toggleClass("hidden");
 });
 // события
 $(".knopka4-1").click(function(){
   $(this).toggleClass("knopka4");
   $(".block4-1").toggleClass("open4-1");
   $(".block4-1-content").toggleClass("hidden");
 });
 $(".knopka4-2").click(function(){
   $(this).toggleClass("knopka4");
   $(".block4-2").toggleClass("open4-2");
   $(".block4-2-content").toggleClass("hidden");
 });
 // магазин
 $(".knopka5-1").click(function(){
   $(this).toggleClass("knopka4");
   $(".block5-1").toggleClass("open5-1");
   $(".block5-1-content").toggleClass("hidden");
 });
 $(".knopka5-2").click(function(){
   $(this).toggleClass("knopka4");
   $(".block5-2").toggleClass("open5-2");
   $(".block5-2-content").toggleClass("hidden");
 });
 // FAQ
 $(".knopka6-1").click(function(){
   $(this).toggleClass("knopka4");
   $(".block6-1").toggleClass("open6-1");
   $(".block6-1-content").toggleClass("hidden");
 });
 $(".knopka6-2").click(function(){
   $(this).toggleClass("knopka4");
   $(".block6-2").toggleClass("open6-2");
   $(".form").toggleClass("hidden");
 });
  // контакты
  $(".knopka7-1").click(function(){
    $(this).toggleClass("knopka4");
    $(".block7-1").toggleClass("open7-1");
    $(".contacts").toggleClass("hidden");
  });



// текст при наведении_появление
// о нас
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
// faq
$(".bl-text-6 p:nth-of-type(1)").hover(function() {
  $(".text-hover-6 p:nth-of-type(1)").css("opacity", "1");
});
$(".bl-text-6 p:nth-of-type(2)").hover(function() {
 $(".text-hover-6 p:nth-of-type(2)").css("opacity", "1");
});
$(".bl-text-6 p:nth-of-type(3)").hover(function() {
 $(".text-hover-6 p:nth-of-type(3)").css("opacity", "1");
});
$(".bl-text-6 p:nth-of-type(4)").hover(function() {
 $(".text-hover-6 p:nth-of-type(4)").css("opacity", "1");
});
$(".bl-text-6 p:nth-of-type(5)").hover(function() {
 $(".text-hover-6 p:nth-of-type(5)").css("opacity", "1");
});
$(".bl-text-6 p:nth-of-type(6)").hover(function() {
 $(".text-hover-6 p:nth-of-type(6)").css("opacity", "1");
});


// текст при наведении_исчезновение
// о нас
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
// faq
$(".bl-text-6 p:nth-of-type(1)").mouseleave(function() {
  $(".text-hover-6 p:nth-of-type(1)").css("opacity", "0");
});
$(".bl-text-6 p:nth-of-type(2)").mouseleave(function() {
 $(".text-hover-6 p:nth-of-type(2)").css("opacity", "0");
});
$(".bl-text-6 p:nth-of-type(3)").mouseleave(function() {
 $(".text-hover-6 p:nth-of-type(3)").css("opacity", "0");
});
$(".bl-text-6 p:nth-of-type(4)").mouseleave(function() {
 $(".text-hover-6 p:nth-of-type(4)").css("opacity", "0");
});
$(".bl-text-6 p:nth-of-type(5)").mouseleave(function() {
 $(".text-hover-6 p:nth-of-type(5)").css("opacity", "0");
});
$(".bl-text-6 p:nth-of-type(6)").mouseleave(function() {
 $(".text-hover-6 p:nth-of-type(6)").css("opacity", "0");
});


// радиокнопка
$(".form-dot1").click(function(){
  $(this).toggleClass("form-dot-4");
  // $(".form-dot2").addClass("form-dot-5");
  // $(".form-dot3").addClass("form-dot-5");
});
$(".form-dot2").click(function(){
  $(this).toggleClass("form-dot-4");
  // $(".form-dot1").addClass("form-dot-5");
  // $(".form-dot3").addClass("form-dot-5");
});
$(".form-dot3").click(function(){
  $(this).toggleClass("form-dot-4");
  // $(".form-dot1").addClass("form-dot-5");
  // $(".form-dot2").addClass("form-dot-5");
});

// инфо
$(".info-circle").hover(function() {
  $(".info-rec, .info-text").css("display", "block");
});
$(".info-circle").mouseleave(function() {
 $(".info-rec, .info-text").css("display", "none");
});

// появление объектов по ховеру
// книга блок 1
$("span:nth-of-type(1)").hover(function() {
  $(".bl-3-1-obj-1").css("display", "block");
});
$("span:nth-of-type(1)").mouseleave(function() {
 $(".bl-3-1-obj-1").css("display", "none");
});
$("span:nth-of-type(2)").hover(function() {
  $(".bl-3-1-obj-2").css("display", "block");
});
$("span:nth-of-type(2)").mouseleave(function() {
 $(".bl-3-1-obj-2").css("display", "none");
});
$(".bl-3-2-text > p > span:nth-of-type(1)").hover(function() {
  $(".bl-3-2-obj-1").css("display", "block");
});
$(".bl-3-2-text > p > span:nth-of-type(1)").mouseleave(function() {
 $(".bl-3-2-obj-1").css("display", "none");
});
$(".bl-3-2-text > p > span:nth-of-type(2)").hover(function() {
  $(".bl-3-2-obj-2").css("display", "block");
});
$(".bl-3-2-text > p > span:nth-of-type(2)").mouseleave(function() {
 $(".bl-3-2-obj-2").css("display", "none");
});
$(".bl-3-3-text > p > span:nth-of-type(1)").hover(function() {
  $(".bl-3-3-obj-1").css("display", "block");
});
$(".bl-3-3-text > p > span:nth-of-type(1)").mouseleave(function() {
 $(".bl-3-3-obj-1").css("display", "none");
});
$(".bl-3-3-text > p > span:nth-of-type(2)").hover(function() {
  $(".bl-3-3-obj-2").css("display", "block");
});
$(".bl-3-3-text > p > span:nth-of-type(2)").mouseleave(function() {
 $(".bl-3-3-obj-2").css("display", "none");
});
$(".bl-3-4-text > p > span:nth-of-type(1)").hover(function() {
  $(".bl-3-4-obj-1").css("display", "block");
});
$(".bl-3-4-text > p > span:nth-of-type(1)").mouseleave(function() {
 $(".bl-3-4-obj-1").css("display", "none");
});
$(".bl-3-4-text > p > span:nth-of-type(2)").hover(function() {
  $(".bl-3-4-obj-2").css("display", "block");
});
$(".bl-3-4-text > p > span:nth-of-type(2)").mouseleave(function() {
 $(".bl-3-4-obj-2").css("display", "none");
});

// "горизонтальный скролл"
$(".block3").draggable({axis: "x"});
$(".form-div").draggable({axis: "x"});
$(".block4-1-content").draggable({axis: "x"});
$(".block4-2-content").draggable({axis: "x"});
$(".block5-1-content").draggable({axis: "x"});


// клик на плакаты
$(".ev-1-p-rec1").click(function(){
  $(this).toggleClass("op-1");
  $(".ev-1-1").toggleClass("ev-1-1-n");
});
$(".ev-1-p-rec2").click(function(){
  $(this).toggleClass("op-1");
  $(".ev-1-2").toggleClass("ev-1-2-n");
});
$(".ev-1-p-rec3").click(function(){
  $(this).toggleClass("op-1");
  $(".ev-1-3").toggleClass("ev-1-3-n");
});
$(".ev-1-p-rec4").click(function(){
  $(this).toggleClass("op-1");
  $(".ev-1-4").toggleClass("ev-1-4-n");
});

$(".ev-2-p-rec1").click(function(){
  $(this).toggleClass("op-1");
});
$(".ev-2-p-rec2").click(function(){
  $(this).toggleClass("op-1");
});
$(".ev-2-p-rec3").click(function(){
  $(this).toggleClass("op-1");
});
$(".ev-2-p-rec4").click(function(){
  $(this).toggleClass("op-1");
});
// клик на носители магазин
$(".cv-1-1").click(function(){
  $(this).toggleClass("cv-1-11");
});
$(".cv-1-2").click(function(){
  $(this).toggleClass("cv-1-12");
});
$(".cv-1-3").click(function(){
  $(this).toggleClass("cv-1-13");
});
$(".cv-1-4").click(function(){
  $(this).toggleClass("cv-1-14");
});

// кнопки магазин
$(".i11-1").click(function(){
  $(this).addClass("i11-1a");
});
$(".i11-2").click(function(){
  $(this).addClass("i11-2a");
});
$(".i12-1").click(function(){
  $(this).addClass("i12-1a");
});
$(".i12-2").click(function(){
  $(this).addClass("i12-2a");
});
$(".i13-1").click(function(){
  $(this).addClass("i13-1a");
});
$(".i13-2").click(function(){
  $(this).addClass("i13-2a");
});
$(".i14-1").click(function(){
  $(this).addClass("i14-1a");
});
$(".i14-2").click(function(){
  $(this).addClass("i14-2a");
});

});
