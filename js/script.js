new Swiper(".image-slider", {
  pagination:{
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 'auto',

  loop: true,

  breakpoints: { 
    320: { enabled: true, }, 
    768: { enabled: false, } 
  },
});

const read_more = document.querySelector('.image-slider__read-more_visible');
const read_more_button = read_more.querySelector('.read-more__button');



read_more_button.addEventListener('click', function() {
  
  if(read_more_button.classList.contains('all')){
    read_more_button.classList.remove('all');
    read_more_button.value = "Показать все";



    if (window.innerWidth >= 768 && window.innerWidth < 1119){
      const image_slide = document.querySelectorAll('.image-slider__slide:not(:nth-child(-n +6))');
      for (let slide of image_slide){
        slide.setAttribute('id', 'hidden');
      }
    }
    else if (window.innerWidth >= 1120 && window.innerWidth < 1400){
      const image_slide = document.querySelectorAll('.image-slider__slide:not(:nth-child(-n +8))');
      for (let slide of image_slide){
        slide.setAttribute('id', 'hidden');
      }
    }
  }
  else{
    read_more_button.classList.add('all');
    read_more_button.value = "Скрыть";

    const image_slide = document.querySelectorAll('.image-slider__slide');
    for (let slide of image_slide){
      slide.removeAttribute('id');
    }
  }

});


function hidden (){
  const image_slide = document.querySelectorAll('.image-slider__slide');
  for (let slide of image_slide){
    let id = slide.dataset.swiperSlideIndex;
    if (window.innerWidth >= 768 && window.innerWidth < 1119){
      if (id > 5) slide.setAttribute('id', 'hidden');  
    }
    if (window.innerWidth >= 1120 && window.innerWidth < 1400){
      if (id > 7) slide.setAttribute('id', 'hidden');  
    }
  }
}
hidden();