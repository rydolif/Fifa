$(function() {

//------------------------------tabs-----------------------------
  $('.tabs_').hide();
  $('.tabs:first').show();
  $('.tabs a').click(function(event){
    event.preventDefault();
    $('.tabs').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  })

//------------------------------account-----------------------------
    $('.header__account').click(function() {
      $(this).toggleClass('header__account--active');
      $('.header__account_list').toggleClass('header__account_list--active');
    });

//------------------------------slider-----------------------------
  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 60,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('header').toggleClass('header--menu');
  });

// //-------------------------------попандер---------------------------------------
//   $('.modal').popup({transition: 'all 0.3s'});

// //------------------------------------form-------------------------------------------
//   $('input[type="tel"]').mask('+0 (000) 000-00-00');

//   jQuery.validator.addMethod("phoneno", function(phone_number, element) {
//      return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
//   }, "Введите Ваш телефон");

//   $(".form").each(function(index, el) {
//     $(el).addClass('form-' + index);

//     $('.form-' + index).validate({
//       rules: {
//         phone: {
//           required: true,
//           phoneno: true
//         },
//         name: 'required',
//       },
//       messages: {
//         name: "Введите Ваше имя",
//         phone: "Введите Ваш телефон",
//       },
//       submitHandler: function(form) {
//         var t = {
//           name: jQuery('.form-' + index).find("input[name=name]").val(),
//           phone: jQuery('.form-' + index).find("input[name=phone]").val(),
//           subject: jQuery('.form-' + index).find("input[name=subject]").val()
//         };
//         ajaxSend('.form-' + index, t);
//       }
//     });

//   });

//   function ajaxSend(formName, data) {
//     jQuery.ajax({
//       type: "POST",
//       url: "sendmail.php",
//       data: data,
//       success: function() {
//         $(".modal").popup("hide");
//         $("#thanks").popup("show");
//         setTimeout(function() {
//           $(formName).trigger('reset');
//         }, 2000);
//       }
//     });
//   }

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

//-------------------------скорость якоря---------------------------------------
  $(".footer__up").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  });
  
});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });

