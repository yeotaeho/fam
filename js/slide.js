$(document).ready(function(){
  
  function slide(){

    $('.slide').stop().animate({marginLeft:-1900}, function(){
    
     $('.slide li:first').appendTo('.slide');
    
     $('.slide').css({marginLeft:0});
    
    });
    
    }
    function prev(){
        $('.slide li:last').prependTo('.slide');
        $('.slide').css('margin-left',-1900);   
        $('.slide').stop().animate({marginLeft:0},400);
        }
        
        
        function next(){
        $('.slide').stop().animate({marginLeft:-1900}, function(){
           $('.slide li:first').appendTo('.slide');
           $('.slide').css({marginLeft:0});
        });
        }
        
        $('#slider').hover(function(){
          $('#slider > span').show(300)
        },function(){
          $('#slider > span').hide(300)
        })
        
        
        setInterval(slide, 3000);
        
        $('.prev').click(function(){
        prev();
        });
        
        $('.next').click(function(){
        next();
        });
    

});

 