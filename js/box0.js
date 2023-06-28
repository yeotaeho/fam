


$(function() {
      $.ajax({
        url:"./json/dma0.json",
        dataType:"json",
        success : function(data){

          if(data.length>0){
            for(var i in data){

              $('.sub').eq(0).find('a').eq(i).text(data[i].wpqkf4)
              $('.sub').eq(1).find('a').eq(i).text(data[i].wpqkf3)
              $('.sub').eq(2).find('a').eq(i).text(data[i].wpqkf2)
              $('.sub:last').find('a').eq(i).text(data[i].wpqkf)

            }

          }
       
        }
        
      });
      
    });
