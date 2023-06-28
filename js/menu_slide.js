 $(document).ready(function(){

$('.jq > li').click(function(e){
  
  $(this).siblings().css({"color":"#828282","background-color":"#eee"})
  $(this).css({"color":"#fff","background-color":"#046142"})

});


$('.menu > ul').find('li').eq(0).click(function(e){
 
  $('#wpqkfa').stop().animate({marginLeft:0},"slow")
});

$('.menu > ul').find('li').eq(1).click(function(e){
  
  $('#wpqkfa').stop().animate({marginLeft:-1150},"slow")
});

$('.menu > ul').find('li').eq(2).click(function(e){
  
  $('#wpqkfa').stop().animate({marginLeft:-2305},"slow")
});

$('.menu > ul').find('li').eq(3).click(function(e){
  
  $('#wpqkfa').stop().animate({marginLeft:-3455},"slow")
});

$('.menu > ul').find('li').eq(4).click(function(e){
  
  $('#wpqkfa').stop().animate({marginLeft:-4605},"slow")
});

$('.menu > ul').find('li').eq(5).click(function(e){
 
  $('#wpqkfa').stop().animate({marginLeft:-5755},"slow")
});

$('.menu > ul').find('li').eq(6).click(function(e){
 
  $('#wpqkfa').stop().animate({marginLeft:-6905},"slow")
});

$('.menu > ul').find('li').eq(7).click(function(e){
  
  $('#wpqkfa').stop().animate({marginLeft:-8055},"slow")
});

});