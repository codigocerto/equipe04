/* testimonials */

const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 40,
    slidesPerView:2,
    direction: getDirection(),
    autoplay: {
        delay: 7000,
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection())
        },
      }
      
  })
  function getDirection() {
  
    var direction = window.innerWidth >= 768 ? 'horizontal' : 'vertical';

    return direction;
  }
