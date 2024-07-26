// // var swiper2 = new Swiper(".mySwiper2", {
// //     spaceBetween: 1,
// //     centeredSlides: true,
// //     slidesPerView: 1,
// //     loop: true,
// //     autoplay: {
// //         delay: 3000,
// //         disableOnInteraction: false,
// //     },
// //     pagination: {
// //         el: ".swiper2-pagination",
// //         clickable: true,
// //     },

// // });

// function locomotive() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true,
//   });

//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },

//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },

//     pinType: document.querySelector(".main").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }

// function ScrollTriggering() {
//   let t1 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".tittle",
//       scroller: ".main",
//       scrub: 2,
//       start: "top 0%",
//       end: "top -10%",
//     },
//   });

//   t1.to(
//     ".tittle h2",
//     {
//       x: "-10%",
//     },
//     "first"
//   );

//   t1.to(
//     ".tittle h3",
//     {
//       x: "20%",
//     },
//     "first"
//   );
// }

// function pointer() {
//   let rotatex = 0;
//   let rotatey = 0;
//   let timeout = 0;
//   window.addEventListener("mousemove", (evet) => {
//     clearTimeout(timeout);

//     let rx = evet.clientX - rotatex;
//     let ry = evet.clientY - rotatey;
//     rotatex = evet.clientX;
//     rotatey = evet.clientY;

//     let finalx = gsap.utils.clamp(0.8, 1.2, rx);
//     let finaly = gsap.utils.clamp(0.8, 1.2, ry);

//     document.querySelector(
//       ".pointer"
//     ).style.transform = `translate(${evet.clientX}px,${evet.clientY}px) scale(${finaly},${finalx})`;

//     timeout = setTimeout(() => {
//       document.querySelector(
//         ".pointer"
//       ).style.transform = `translate(${evet.clientX}px,${evet.clientY}px) scale(1)`;
//     }, 100);
//   });
// }


// function pointer2(){
     
//   let rotatex = 0;
//   let rotatey = 0;
//   let timeout = 0;
//    window.addEventListener("mousemove",(evet)=>{

//       clearTimeout(timeout);
     
//       document.querySelector(".pointer2").style.transform = translate(${evet.clientX}px,${evet.clientY}px)

//       timeout = setTimeout(()=>{

//         document.querySelector(".pointer2").style.transform = `translate(${evet.clientX}px,${evet.clientY}px) `


//       },100)


//       })

// }

// const sBtn = document.querySelector(".searchBtn");
// const sInput = document.querySelector(".searchTxt");
// const s_bar = document.querySelector(".search_bar");

// flag = true;
// sBtn.addEventListener("click", () => {
//   sInput.style.transition = "0s";
//   if (flag) {
//     sInput.style.width = "0vw";
//     sBtn.style.borderRadius = "50px";
//     sBtn.style.marginLeft = "25vw";
//     s_bar.style.backgroundColor = "black";
//     flag = false;
//   } else {
//     sInput.style.width = "25vw";
//     sInput.style.transition = "1s";
//     sBtn.style.borderRadius = "0px";
//     sBtn.style.marginLeft = "0vw";
//     sBtn.style.borderTopRightRadius = "10px";
//     sBtn.style.borderBottomRightRadius = "10px";
//     s_bar.style.backgroundColor = "white";
//     flag = true;
//   }
// });

// ScrollTrigger();
// pointer();
// locomotive();
// pointer2();

// // var swiper2 = new Swiper(".mySwiper2", {
// //     spaceBetween: 1,
// //     centeredSlides: true,
// //     slidesPerView: 1,
// //     loop: true,
// //     autoplay: {
// //         delay: 3000,
// //         disableOnInteraction: false,
// //     },
// //     pagination: {
// //         el: ".swiper2-pagination",
// //         clickable: true,
// //     },

// // });




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
  locomotive();
  
  function ScrollTriggering(){
     
    
    let t1 = gsap.timeline({
    
            scrollTrigger:{
            trigger: ".tittle",
            scroller: ".main",
            scrub:2,
            start:"top 0%",
            end:"top -10%",   
           }
          });
  
  
  
        t1.to((".tittle h2"),{
            x:"-10%",
        },"first") 
  
        t1.to((".tittle h3"),{
  
            x:"20%"
        },"first")
  
  
  
  
  
  
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
  
  function pointer2(){
     
    let rotatex = 0;
    let rotatey = 0;
    let timeout = 0;
     window.addEventListener("mousemove",(evet)=>{
  
        clearTimeout(timeout);
       
        document.querySelector(".pointer2").style.transform = `translate(${evet.clientX}px,${evet.clientY}px)`
  
        timeout = setTimeout(()=>{
  
          document.querySelector(".pointer2").style.transform = `translate(${evet.clientX}px,${evet.clientY}px) `
  
  
        },100)
  
  
        })
  
  }
  
  
  
  //search bar animation
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
            s_bar.style.backgroundColor = "#000"
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
  
  
  
  pointer();
  pointer2();
  ScrollTriggering();
  
  
  
  
  //This is the js code for the chat opening script
  document.addEventListener("DOMContentLoaded", function () {
    let element = document.querySelector(".chatIcon");
  
    // console.log("Element:", element); // Debugging statement
  
    // Add a click event listener to the element
    element.addEventListener("click", function () {
      // Redirect to the new HTML file
      window.location.href = "index.html";
    });
  });
  