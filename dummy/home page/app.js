function locomotive(){
     
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);
  
  
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
  
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  
  }
  
function ScrollTrigger(){

  let t1 = gsap.timeline({
   
    ScrollTrigger:{
        
       start:"top -20",
       trigger:".nav_bar",
       scroller:"body",
       end:"top -21",
       markers:true,

    }
})

let nav = document.querySelector(".nav_bar");

 t1.from(".nav_bar",{
    
      height:"5vw",
      duration:1,

 })
}

function pointer(){
   
  let rotatex = 0;
  let rotatey = 0;
  let timeout = 0;
   window.addEventListener("mousemove",(evet)=>{

      clearTimeout(timeout);
     
      let rx = evet.clientX - rotatex;
      let ry = evet.clientY - rotatey;
      rotatex = evet.clientX;
      rotatey = evet.clientY;

      let finalx = gsap.utils.clamp(0.8,1.2,rx);
      let finaly = gsap.utils.clamp(0.8,1.2,ry);

      document.querySelector(".pointer").style.transform = `translate(${evet.clientX}px,${evet.clientY}px) scale(${finaly},${finalx})`

      timeout = setTimeout(()=>{

        document.querySelector(".pointer").style.transform = `translate(${evet.clientX}px,${evet.clientY}px) scale(1)`


      },100)


      })

}

  const sBtn = document.querySelector('.searchBtn');
  const sInput = document.querySelector('.searchTxt');
  const s_bar = document.querySelector(".search_bar");

  flag = true;
  sBtn.addEventListener('click',()=>{
      
    sInput.style.transition = '0s'
      if (flag){
          sInput.style.width = '0vw';
          sBtn.style.borderRadius = '50px'
          sBtn.style.marginLeft = "25vw"
          s_bar.style.backgroundColor = "black"
          flag = false
      }
  
      else{
          sInput.style.width = '25vw';
          sInput.style.transition = '1s'
          sBtn.style.borderRadius = '0px'
          sBtn.style.marginLeft = "0vw"
          sBtn.style.borderTopRightRadius= '10px';
          sBtn.style.borderBottomRightRadius= '10px';
          s_bar.style.backgroundColor = "white"
          flag =true
}
  })




ScrollTrigger();
pointer();    
locomotive();