// var swiper2 = new Swiper(".mySwiper2", {
//     spaceBetween: 1,
//     centeredSlides: true,
//     slidesPerView: 1,
//     loop: true,
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper2-pagination",
//         clickable: true,
//     },
  
// });



// var swiper2 = new Swiper(".mySwiper2", {
//     spaceBetween: 1,
//     centeredSlides: true,
//     slidesPerView: 1,
//     loop: true,
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper2-pagination",
//         clickable: true,
//     },
// });



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// var swiper2 = new Swiper(".userSwiper", {
//   spaceBetween: 1,
//   centeredSlides: true,
//   slidesPerView: 1,
//   loop: true,
//   autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//   },
//   pagination: {
//       el: ".swiper2-pagination",
//       clickable: true,
//   },

// });


// const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100,
// });


// const swiper = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();

// const swiper = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();

// var swiper = new Swiper('.userSwiper', {
//   // Optional parameters
//   spaceBetween: 1,
//   direction: 'horizontal',
//   slidesPerView: 1,
//   loop: true,
//   autoplay: {
//           delay: 3000,
//           disableOnInteraction: false
//       },
//   // If you need pagination
//   // pagination: {
//   //     el: '.swiper2-pagination',
//   //     clickable:true
//   // },
  

//   // Navigation arrows
//   // navigation: {
//   //     nextEl: '.swiper-button-next',
//   //     prevEl: '.swiper-button-prev',
//   // },
// });




// var swiper = new Swiper('.userSwiper', {
//   // Optional parameters
//   spaceBetween: 1,
//   direction: 'horizontal',
//   // direction: 'vertical',
//   slidesPerView: 1, // Adjust this according to the number of slides you want to show
//   loop: true,
//   autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//   },
//   // If you need pagination
//   pagination: {
//       el: '.swiper2-pagination',
//       clickable: true
//   }
// });

// swiper.sildeNext();


// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   slidesPerView: 1,
//   spaceBetween: 1,
//   loop: true,
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//   },
//   // navigation: {
//   //     nextEl: '.swiper-button-next',
//   //     prevEl: '.swiper-button-prev',
//   // },
//   // scrollbar: {
//   //     el: '.swiper-scrollbar',
//   // },
// });

// // Now you can use all slider methods like swiper.slideNext();
// swiper.slideNext();
