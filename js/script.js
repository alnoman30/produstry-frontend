$(function ($) {
  // menu toggle js
  $('.menu_toggle_icon').on('click', function () {
    $('#myNav ul').toggleClass('menu_hide');
    $('.logo').toggleClass('logo_expand');
  });

  // banner js slider
  $('#banner').slick({
    autoplay: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 1500,
    arrows: true,
    prevArrow: '<li class="pre_arrow"><span> <i class="fa-solid fa-angle-left "></i></span></li>',
    nextArrow:   '<li class="nxt_arrow"><span> <i class="fa-solid fa-angle-right "></i></span></li>', 
  });
  // service js slider
  $('.service_slider').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  // Portfolio slider js
  $('.portfolio_slider').slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // Lighbox Js
  //lightbox js
  new VenoBox({
    selector: ".portfolio_gallery",
    spinner: 'flow',
    spinColor: '#ffca36'
  });

  // Counter js
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate({
        Counter: $(this).text(),
      }, {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
          $(this).text(now);
        },
      });
  });
  // Blog part slider
  $('.home_blog_slider').slick({
    slidesToShow: 3,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<li class="pre_arrow"><span> <i class="fa-solid fa-angle-left "></i></span></li>',
    nextArrow:   '<li class="nxt_arrow"><span> <i class="fa-solid fa-angle-right "></i></span></li>',
    responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },


      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  //Testimonial js slider
  $('.testimonial_feedback_slider').slick({
    arrows: true,
    prevArrow: '<li class="pre_arrow"><span> <i class="fa-solid fa-angle-left "></i></span></li>',
    nextArrow:   '<li class="nxt_arrow"><span> <i class="fa-solid fa-angle-right "></i></span></li>',
    asNavFor: '.user_img_slider'

  });
  $('.user_img_slider').slick({
    slidesToShow: 3,
    arrows: false,
    asNavFor: '.testimonial_feedback_slider',
    centerMode: true,
    centerPadding: '0',

  });
  // Home brand js slider
  $('.home_brand_slider').slick({
    slidesToShow:5,
    centerMode: true,
    centerPadding: '0',
    arrows: true,
    prevArrow: '<li class="pre_arrow"><span> <i class="fa-solid fa-angle-left "></i></span></li>',
    nextArrow:   '<li class="nxt_arrow"><span> <i class="fa-solid fa-angle-right "></i></span></li>',
    responsive: [
      {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
      }
    },


    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
  // About page team js slider
  $('.abtpage_team_slider').slick({
    slidesToShow:3,
    centerMode: true,
    centerPadding: '0',
    arrows: true,
    prevArrow: '<li class="pre_arrow"><span> <i class="fa-solid fa-angle-left "></i></span></li>',
    nextArrow:   '<li class="nxt_arrow"><span> <i class="fa-solid fa-angle-right "></i></span></li>',
    responsive: [
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },


    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
 
  });

});