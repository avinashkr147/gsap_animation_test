var tl = gsap.timeline();
tl.from("nav",{
 y:-80,
 opacity:0,
 duration:1,
 delay:0.5,
 stagger:true,    


})
tl.from("nav>h1",{
     x:100,
     opacity:0,
     duration:1.2,
    //  delay:0.5,
     stagger:true,    
    
    
    })

    tl.from("nav ul>li",{
        x:-50,
        opacity:0,
        duration:1.3,
       //  delay:0.5,
        stagger:true,    
       
       
       }) 

       tl.from("#signUp-area>h1",{
        y:-50,
        opacity:0,
        duration:1.3,
       //  delay:0.5,
        stagger:true,    
       
       
       }) 

       tl.from("#log-inIcon>i",{
        // x:100,
        y:100,
        opacity:0,
        duration:1.3,
       //  delay:0.5,
        stagger:true,   
        repeat:-1,
        yoyo:true,
       
       
       })    

  
       tl.from(".left-container>#h2-unl",{
        // x:100,
        x:-100,
        opacity:0,
        duration:1.3,
       //  delay:0.5,
        stagger:true,   
        // repeat:-1,
        // yoyo:true,
       
       
       })     
       tl.from(".left-container>#h2-pre",{
        // x:100,
        x:100,
        opacity:0,
        duration:1.3,
       //  delay:0.5,
        stagger:true,   
        // repeat:-1,
        // yoyo:true,
       
       
       })     
       
       
       tl.from(".left-container>img",{
        y:50,
         rotate:90,
        opacity:0,
        duration:1.3,
       //  delay:0.5,
         
        // repeat:-1,
        // yoyo:true,
       
       
       })    
    
       tl.from("#idea",{
        y:-100,
         scale:1.2,
        opacity:0,
        duration:1.3,
       //  delay:0.5,
        stagger:true,   
        // repeat:-1,
        // yoyo:true,
       
       
       })    
       tl.from("#solutions>h3",{
        // y:-100,
        opacity:0,
        duration:1.3,
       //  delay:0.5,
        // repeat:-1,
        // yoyo:true,
       
       
       })    

       tl.from(".right-cotainer>img",{
        x:50,
        opacity:0,
        scale:1,
        duration:1.3,
       //  delay:0.5,
        // repeat:-1,
        // yoyo:true,
       
       
       })    
     
       tl.from("#line",{
        // x:50,
        opacity:0,
        // scale:1,
        duration:1.3,
       //  delay:0.5,
        // repeat:-1,
        // yoyo:true,
       
       
       })     

    gsap.from(".page-2-left-container>#videoIcon-container",{
        x:100,
        // opacity:0,
        duration:1,
        stagger:0.3,
        scrollTrigger:{
                trigger:".page-2-left-container>#videoIcon-container",
                scroller:"body",
                // markers:true,
                start:"top 70%",
                end:"top 90%",

        } 

    })   
 
    gsap.from(".button-container>h3",{
        // x:100,
        opacity:0,
        duration:1.5,
        stagger:0.3,
        scrollTrigger:{
                trigger:".button-container>h3",
                scroller:"body",
                // markers:true,
                start:"top 70%",
                end:"top 90%",

        } 

    })    


    gsap.from(".page-2-right-container>#box",{
        x:100,
        opacity:0,
        duration:1.5,
        stagger:0.3,
        scrollTrigger:{
                trigger:".page-2-right-container>#box",
                scroller:"body",
                // markers:true,
                start:"bottom 40%",
                end:"bottom 50%",

        } 

    })   



