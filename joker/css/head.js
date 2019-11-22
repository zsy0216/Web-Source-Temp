$(function () {
   $(".join").hover(function () {
       $(".join div").fadeIn(700);
       $(".join div").css("background-color","#3c3f41");
       $(".join").css("background-color","#3c3f41");
   },function () {
       $(".join div").fadeOut(700);
       $(".join").css("background-color","#323232");
   })
});