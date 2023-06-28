


$(function() {
      $.ajax({
        url:"./json/dma7.json",
        dataType:"json",
        success : function(data){

          if(data.length>0){
            for(var i in data){

              $('.imgs > .imgss').find('a').eq(i).append('<img src="'+data[i].insimg+'">')

            }
            
          }
       
        }
        
      });
      
    });
