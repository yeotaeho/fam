


$(function() {
      $.ajax({
        url:"./json/dma2.json",
        dataType:"json",
        success : function(data){

          if(data.length>0){
            for(var i in data){



              
              $('.bestimgbox > a').eq(i).append("<img src='"+data[i].bestimg+"'>")
              $('.text2 > .icon2').find('a').eq(i).append("<img src='"+data[i].icon+"'>")
              $('.text2 > a').find('h5').eq(i).text(data[i].menu2)
              $('.text2 > p').eq(i).html(data[i].sel2+data[i].span)
              $('.text2 > h6').eq(i).text(data[i].tag2)

              

            }
            $('.text2 > p').eq(2).html(data[2].sel2+data[2].span+data[2].str)
          }
       
        }
        
      });
      
    });
