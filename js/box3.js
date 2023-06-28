


$(function() {
      $.ajax({
        url:"./json/dma3.json",
        dataType:"json",
        success : function(data){

          if(data.length>0){
            for(var i in data){

              $('.newboxa > a').eq(i).append("<img src='"+data[i].newimg+"'>")
              $('.text3 > .icon3').find('a').eq(i).append("<img src='"+data[i].icon+"'>")
              $('.text3 > a').find('h5').eq(i).text(data[i].menu3)
              $('.text3 > p').eq(i).html(data[i].sel3+data[i].span)
              $('.text3 > h6').eq(i).text(data[i].tag3)

            }
            
            $('.text3 > p').eq(1).html(data[1].sel2+data[1].span+data[1].str)
          }
       
        }
        
      });
      
    });
