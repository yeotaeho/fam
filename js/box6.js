
$(function() {
      $.ajax({
        url:"./json/dma6.json",
        dataType:"json",
        success : function(data){

          if(data.length>0){
            for(var i in data){

              $('#imgbox5 > a').eq(i).append('<img src="'+data[i].imgbox+'">')
              $('.conimgbox > a').eq(i).append('<img src="'+data[i].conimg+'">')
              $('.conimgbox > .context').find('h6').eq(i).text(data[i].context)
              $('.conimgbox > .context').find('p').eq(i).text(data[i].context2)

            }
            
          }
       
        }
        
      });
      
    });
