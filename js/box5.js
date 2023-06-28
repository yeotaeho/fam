


$(function() {
      $.ajax({
        url:"./json/dma5.json",
        dataType:"json",
        success : function(data){

          if(data.length>0){
            for(var i in data){

              
              $('.storyimg > a').eq(i).append('<img src="'+data[i].storyimg+'">')
              $('.storytextbox > a').find('h6').eq(i).text(data[i].storytext1)
              $('.storytextbox > a').find('h4').eq(i).text(data[i].storytext2)
              $('.storytextbox > p').eq(i).text(data[i].storytext3)

              

            }
            
          }
       
        }
        
      });
      
    });
