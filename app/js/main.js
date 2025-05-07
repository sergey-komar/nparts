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
        dots: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
            }
          },
         
          {
            breakpoint: 830,
            settings: {
              slidesToShow: 2,
            }
          },
         
        ]
    });


    $('.brand-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              arrows: false
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 3,
              arrows: false
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
          },
         
        ]
    });


    $('.feedback-block-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:false,
          dots: true,
          responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
              }
            },
           
          ]
        
      });

      $('.news-block-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
            }
          },
         
        ]
      
    });


    $('.product-slide__thumb').slick({
      asNavFor: '.product-slide__big',
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable: false
      
      });
  
      $('.product-slide__big').slick({
      asNavFor: '.product-slide__thumb',
      draggable: false,
      arrows: false,

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


     //qty-btn
      $(".qty-btn").on("click", function (e) {
        e.preventDefault();
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.hasClass("inc")) {
        var newVal = parseFloat(oldValue) + 1;
        } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
        }
        $button.parent().find("input").val(newVal);
      });



      $('.production-filter__item-title').on('click', function(){
        $(this).next().slideToggle(500); 
        $(this).toggleClass('open'); 
      });

     // Фильтр 
     $(".filter-price__input").ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data){
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);

    },

});


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


      const tabsItem = document.querySelector('.tabs__item');
        const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
        const tabsContent = document.querySelectorAll('.tabs__content');

        function tabsHide(){
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });

            tabsItemBtn.forEach(btn =>{
                btn.classList.remove('active-tab');
            })
        }
        function tabsShow(i){
            tabsContent[i].classList.add('show');
            tabsContent[i].classList.remove('hide');
            tabsItemBtn[i].classList.add('active-tab');
        }

        if(tabsItem && tabsItemBtn && tabsContent){
          tabsItem.addEventListener('click', (e)=>{
            const target = e.target;
            
            if(target && target.classList.contains('tabs__item-btn')){
                tabsItemBtn.forEach((item, i)=>{
                    if(target == item){
                        tabsHide();
                        tabsShow(i);
                    }
                  
                })
              
            }
        })

        tabsHide();
        tabsShow(0);

        }

        const btnReturn = document.querySelector('.product-top__return')

        if(btnReturn){
          btnReturn.addEventListener('click', () => {
            window.history.back();
          })
  
        }
       

        const menu = document.querySelector(".menu");
        const mobile = document.querySelector(".nav-icon");
    
        mobile.addEventListener("click", function () {
          this.classList.toggle("nav-icon--active");
          menu.classList.toggle("nav--active");
          document.body.classList.toggle('overflow')
        });

        const searchMobileBtn = document.querySelector('.search-mobile-btn');
        const search = document.querySelector('.search');
        const searchClose = document.querySelector('.search-mobile-close');

        if(searchMobileBtn){
          searchMobileBtn.addEventListener('click', () => {
            search.classList.add('search-block');
          })
        }
        if(searchClose){
          searchClose.addEventListener('click', () => {
            search.classList.remove('search-block');
          })
        }
    
      
})