(function ($)
  { "use strict"
  
/* 1. Proloder */

      $('#preloader-active').fadeOut('slow');
      $('body').css({
        'overflow': 'visible'
    });

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $('#home').removeClass("blue-color");
        $('#contact').removeClass("blue-color");
        $('.services-text').removeClass("blue-color");
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
        $('#zalo').fadeOut(500);
        $('#fb').fadeOut(500);
      } else {
        $('#home').addClass("blue-color");
        $('#contact').addClass("blue-color");
        $('.services-text').addClass("blue-color");
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
        $('#zalo').fadeIn(500);
        $('#fb').fadeIn(500);
      }
    });
  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

/* 3. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };

/* 4. MainSlider-1 */
    // h1-hero-active
    function mainSlider() {
      var BasicSlider = $('.slider-active');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        fade: true,
        arrows: false, 
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();

    
/* 5. Testimonial Active*/
  var testimonial = $('.h1-testimonial-active');
    if(testimonial.length){
    testimonial.slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay:false,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrow:true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrow:true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrow:true
            }
          }
        ]
      });
    }


/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();


    
// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();



// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }
      
// 12 Pop Up Video
    var popUp = $('.popup-video');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'iframe'
        });
      }

// click àn scroll




function openModalAndScroll(startId, targetId) {
  var documentElement = document.getElementById(startId);
  var scrollToElement = document.querySelector(targetId);


    documentElement.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(function() {
        switch (documentElement.id) {
          case 'clinic':
          case 'clinic-foot':
            console.log(`No matching class found: ${documentElement.id}`);
            document.getElementById('link0').click();
            break;
          case 'hotel':
          case 'hotel-foot':
            console.log(`No matching class found: ${documentElement.id}`);
            document.getElementById('link1').click();
            break;
          case 'spa':
          case 'spa-foot':
            console.log(`No matching class found: ${documentElement.id}`);
            document.getElementById('link2').click();
            break;
          case 'petshop':
          case 'petshop-foot':
            console.log(`No matching class found: ${documentElement.id}`);
            document.getElementById('link3').click();
            break;
          case 'breeding-foot':
            console.log(`No matching class found: ${documentElement.id}`);
            document.getElementById('link4').click();
            break;
          case 'training-foot':
            console.log(`No matching class found: ${documentElement.id}`);
            document.getElementById('link5').click();
            break;
          default:      
            console.log(`No matching class found: ${documentElement.id}`);
            break;
        }
      }, 700);
    });

   
}


document.addEventListener('DOMContentLoaded', function() {
  openModalAndScroll('clinic', '#dichvu');
  openModalAndScroll('spa', '#dichvu');
  openModalAndScroll('hotel', '#dichvu');
  openModalAndScroll('petshop', '#dichvu');
  openModalAndScroll('clinic-foot', '#dichvu');
  openModalAndScroll('spa-foot', '#dichvu');
  openModalAndScroll('hotel-foot', '#dichvu');
  openModalAndScroll('petshop-foot', '#dichvu');
  openModalAndScroll('training-foot', '#dichvu');
  openModalAndScroll('breeding-foot', '#dichvu');
  // Add more calls to openModalAndScroll for other modals if needed
});



})(jQuery);

