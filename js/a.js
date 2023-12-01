$(document).ready(function(){

   
    

  

  
        

    
  
    
    


    // 팝업

    let a = 0 
    let popup_next = $(".popup_right")
    let popup_prev = $(".popup_left")

    popup_next.click(function(){
        a++
        if(a>=4){a=4
        $(this).addClass("bye")
        }else{
            $(this).removeClass("bye")
            popup_prev.removeClass("bye")
        }
        $(".train").css("transform","translateX("+(-14*a)+"%)")
    })

    popup_prev.click(function(){
        a--
        if(a<=0){a=0
        $(this).addClass("bye")
        }else{
            $(this).removeClass("bye")
            popup_next.removeClass("bye")
        }
        $(".train").css("transform","translateX("+(-14*a)+"%)")
    })

    $(".slideview").hover(function(){
        
        if(a<=0){
            a=0
            popup_prev.addClass("bye")
            popup_next.removeClass("bye")//첫번째
        }else if(a>=4){
            a=4
            popup_next.addClass("bye")
            popup_prev.removeClass("bye")
        }else{
            popup_next.removeClass("bye") //2,3번째
            popup_prev.removeClass("bye")
        }
    })
    
       
    
        $(".slideview").mouseleave(function(){
            popup_next.addClass("bye") //2,3번째
            popup_prev.addClass("bye")
        })
        
        // 모바일 팝업

    let b = 0 
    let popup_next2 = $(".popup_right2")
    let popup_prev2 = $(".popup_left2")

    popup_next2.click(function(){
        b++
        if(b>=5){b=5
        $(this).addClass("bye")
        }else{
            $(this).removeClass("bye")
            popup_prev2.removeClass("bye")
        }
        $(".train").css("transform","translateX("+(-16.7*b)+"%)")
    })

    popup_prev2.click(function(){
        b--
        if(b<=0){b=0
        $(this).addClass("bye")
        }else{
            $(this).removeClass("bye")
            popup_next2.removeClass("bye")
        }
        $(".train").css("transform","translateX("+(-16.7*b)+"%)")
    })

    $(".slideview").hover(function(){
        
        if(a<=0){
            a=0
            popup_prev2.addClass("bye")
            popup_next2.removeClass("bye")//첫번째
        }else if(a>=5){
            a=5
            popup_next2.addClass("bye")
            popup_prev2.removeClass("bye")
        }else{
            popup_next2.removeClass("bye") //2,3번째
            popup_prev2.removeClass("bye")
        }
    })
    
       
    
        $(".slideview").mouseleave(function(){
            popup_next2.addClass("bye") //2,3번째
            popup_prev2.addClass("bye")
        })    

    // 팝업리스트

    // $(".popuplist").hover(function(){
    //     $(".bl").css("border","1px solid white")
    // })

    // $(".popuplist").mouseleave(function(){
    //     $(".bl").css("border","none")
    // })



    // 배너

     



    let count = 0 
    let next = $(".btn_next")
    let prev = $(".btn_prev")
    let banner_page = $(".pagenation").children()
    let banner_list = $(".pagenation>li")

     next.click(function(){
        count++
        if(count>=3){count=3
            $(this).addClass("bye")
        }else{
            $(this).removeClass("bye")
            $(".btn_prev").removeClass("bye")
        } // 예외처리}
        $(".banner_train").css("transform","translateX("+(-25*count)+"%)")
        banner_page.removeClass("banner_on")
        banner_page.eq(count).addClass("banner_on")
    })

    prev.click(function(){
        count--
        if(count<=0){
            count=0
            $(this).addClass("bye")
         }else{
         $(".btn_next").removeClass("bye")
            $(this).removeClass("bye")
            } // 예외처리}
      

        $(".banner_train").css("transform","translateX("+(-25*count)+"%)")
        
        banner_page.removeClass("banner_on")
        
        banner_page.eq(count).addClass("banner_on")

    
            
    })

    banner_list.click(function(){
        let idx = $(this).index()
        count = idx
        banner_page.removeClass("banner_on")
        $(this).addClass("banner_on")

        $(".banner_train").css("transform",`translateX(${-count*(100/4)}%)`)
    })
    
    $(".banner_slide").hover(function(){
        $(".san").removeClass("bye")
    if(count<=0){
        count=0
        $(".btn_prev").addClass("bye")
        $(".btn_next").removeClass("bye")//첫번째
    }else if(count>=3){
        count=3
        $(".btn_next").addClass("bye")
        $(".btn_prev").removeClass("bye")
    }else{
        $(".btn_next").removeClass("bye") //2,3번째
        $(".btn_prev").removeClass("bye")
    }
})

   

    $(".banner_slide").mouseleave(function(){
        $(".btn_prev").addClass("bye")
        $(".btn_next").addClass("bye")
        $(".san").addClass("bye")

    })
})

