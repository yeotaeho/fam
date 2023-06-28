$(document).ready(function(){

$(function(){

 $('.rs > li').mouseover(function(){
  $(this).find('.sub').stop().slideDown(200,function(){
    
  })
  
  

 }).mouseout(function(){

  $(this).find('.sub').stop().slideUp(300)
 });


 $('.rs > li').find('.sub').hover(function(){
  $(this).find('.top').stop().animate({width:'100%'})
 },function(){
  $(this).find('.top').stop().animate({width:0},100);
 })

});


$('.rs > .wpqkf').mouseout(function(){
  $(this).find('.top').stop().animate({width:0},100);
}).mouseover(function(){
  $(this).find('.top').stop().animate({width:'100%'})
})

});