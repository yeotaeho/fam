


$(function() {
      $.ajax({
        url:"./json/dma4.json",
        dataType:"json",
        success : function(data){

          if(data.length>0){
            for(var i in data){



              $('.bestimg2 > .bestimgbox2').find('a').eq(i).append('<img src="'+data[i].bestimgbox2+'">')
              $('.text4 > .textbox4').find('h2').eq(i).text(data[i].bestmenu)
              $('.textbox4 > p').eq(i).text(data[i].review)
              $('.help').find('h5').eq(i).text(data[i].bestmenu2)
              $('.help > .icon4').find('a').eq(i).append("<img src='"+data[i].icon+"'>")
              $('.help > p').eq(i).text(data[i].bestsel)
              $('.menubox').find('.wls').eq(i).append("<img src='"+data[i].besthelp+"'>")

              

            }
            
            $('#bigimg > .bigimgbox').append('<img src="'+data[0].baimg+'">')
            $('#bigimg > .bigimgbox2').append('<img src="'+data[1].baimg+'">')
          }
       
        }
        
      });
      
    });
