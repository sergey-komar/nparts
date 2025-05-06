$(function () {
    $('.heading-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $('.sellers-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });


    $('.brand-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true
    });


   

    var $slider = $('.scition-slider');

    if ($slider.length) {
      var currentSlide;
      var slidesCount;
      var sliderCounter = document.createElement('div');
      sliderCounter.classList.add('slider__counter');
      
      var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + ' / ' + slidesCount)
      };
    
      $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
      });
    
      $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });
    
      $slider.slick();
    }


})



window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btnUp');

      btn.addEventListener('click', ()=>{
      window.scrollTo({
          top: 0, 
          behavior: 'smooth' 

          });
      });

      function up() {
      window.addEventListener('scroll', () => {

          if(window.scrollY > 690){
          btn.classList.add('btnUp-visible');
        
          }else{
          btn.classList.remove('btnUp-visible');
         
          }
         
          })
      }
      up();
})