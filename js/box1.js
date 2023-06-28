


$(function() {
      $.ajax({
        url:"./json/dma1.json",
        dataType:"json",
        success : function(data){

          if(data.length>0){
            for(var i in data){


              $('.slide > li').find('a').eq(i).append('<img src="'+data[i].slide+'">')

              $('.jq > li').eq(i).text(data[i].menulist)

              $('.text > a').eq(i).html('<h5>'+data[i].menu+"</h5>")
              $('.text > p').eq(i).html(data[i].sel+data[i].span)
              $('.text > h6').eq(i).text(data[i].tag)
              $('.foodimg > a').eq(i).append("<img src='"+data[i].img+"'>")
              $('.icon > a').eq(i).append("<img src='"+data[i].icon+"'>")

            }

            $('.text > .smallimg').eq(0).append("<img src='"+data[0].tagimg+"'>")
            $('.text > .smallimg').eq(0).append("<img src='"+data[0].tagimg2+"'>")


          }
       
        }
        
      });
      
    });
