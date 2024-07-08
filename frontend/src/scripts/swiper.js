/* testimonials */

const swiper = new Swiper('.js-testimonials-slider', {
    
    spaceBetween: 40,
    loop:true,
    autoplay: {
        delay: 7000,
      },
    breakpoints:{
        767:{
            slidesPerView:2
        }
    }
  })
  