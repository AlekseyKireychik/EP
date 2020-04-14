

$(document).ready(function() {
  //slider category

  $("#category05-01").on("init", function(event, slick) {
    $(".category05-01-count").text(1);
    $(".category05-01-counts").text(" / " + slick.slideCount);
  });
  $("#category05-01").on("reInit", function(event, slick) {
    $(".category05-01-count").text(1);
    $(".category05-01-counts").text(" / " + slick.slideCount);
  });
  $("#category05-01").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".category05-01-count").text(currentSlide + 1);
    $(".category05-01-counts").text(" / " + slick.slideCount);
  });
  $("#category05-01").slick({
    infinite: true,
    arrows: true,
    dots: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick"
      }
    ]
  });

  $("#category05-02").on("init", function(event, slick) {
    $(".category05-02-count").text(1);
    $(".category05-02-counts").text(" / " + slick.slideCount);
  });
  $("#category05-02").on("reInit", function(event, slick) {
    $(".category05-02-count").text(1);
    $(".category05-02-counts").text(" / " + slick.slideCount);
  });
  $("#category05-02").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".category05-02-count").text(currentSlide + 1);
    $(".category05-02-counts").text(" / " + slick.slideCount);
  });
  $("#category05-02").slick({
    infinite: true,
    arrows: true,
    dots: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick"
      }
    ]
  });

  $("#category05-03").on("init", function(event, slick) {
    $(".category05-03-count").text(1);
    $(".category05-03-counts").text(" / " + slick.slideCount);
  });
  $("#category05-03").on("reInit", function(event, slick) {
    $(".category05-03-count").text(1);
    $(".category05-03-counts").text(" / " + slick.slideCount);
  });
  $("#category05-03").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".category05-03-count").text(currentSlide + 1);
    $(".category05-03-counts").text(" / " + slick.slideCount);
  });
  $("#category05-03").slick({
    infinite: true,
    arrows: true,
    dots: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick"
      }
    ]
  });

  $("#category05-04").on("init", function(event, slick) {
    $(".category05-04-count").text(1);
    $(".category05-04-counts").text(" / " + slick.slideCount);
  });
  $("#category05-04").on("reInit", function(event, slick) {
    $(".category05-04-count").text(1);
    $(".category05-04-counts").text(" / " + slick.slideCount);
  });
  $("#category05-04").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".category05-04-count").text(currentSlide + 1);
    $(".category05-04-counts").text(" / " + slick.slideCount);
  });
  $("#category05-04").slick({
    infinite: true,
    arrows: true,
    dots: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick"
      }
    ]
  });

  $("#category05-05").on("init", function(event, slick) {
    $(".category05-05-count").text(1);
    $(".category05-05-counts").text(" / " + slick.slideCount);
  });
  $("#category05-05").on("reInit", function(event, slick) {
    $(".category05-05-count").text(1);
    $(".category05-05-counts").text(" / " + slick.slideCount);
  });
  $("#category05-05").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".category05-05-count").text(currentSlide + 1);
    $(".category05-05-counts").text(" / " + slick.slideCount);
  });
  $("#category05-05").slick({
    infinite: true,
    arrows: true,
    dots: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick"
      }
    ]
  });

  $("#category05-06").on("init", function(event, slick) {
    $(".category05-06-count").text(1);
    $(".category05-06-counts").text(" / " + slick.slideCount);
  });
  $("#category05-06").on("reInit", function(event, slick) {
    $(".category05-06-count").text(1);
    $(".category05-06-counts").text(" / " + slick.slideCount);
  });
  $("#category05-06").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".category05-06-count").text(currentSlide + 1);
    $(".category05-06-counts").text(" / " + slick.slideCount);
  });
  $("#category05-06").slick({
    infinite: true,
    arrows: true,
    dots: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick"
      }
    ]
  });

  // carousel home page
  if ($(window).width() > 765) {
    $('.carousel').carousel()
  }
  $('.carousel').bind('DOMMouseScroll', function(e){
    if(e.originalEvent.detail > 0) {
        $('.carousel').carousel('next')
    }else {
        $('.carousel').carousel('prev')
    }
    return false;
  });

  $('.carousel').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta < 0) {
      $('.carousel').carousel('next')
    }else {
        $('.carousel').carousel('prev')
    }
    return false;
});
  
  // basket page orders chek
  if($("#check-preorder-order").is(":checked")) {  
    $("#date-preorder").attr('disabled', false).removeClass("disabled");
    $("#time-preorder").attr('disabled', false).removeClass("disabled");
  } else {
      $("#date-preorder").attr('disabled', true).addClass("disabled");
      $("#time-preorder").attr('disabled', true).addClass("disabled");
  }
  $("#check-preorder-order").on("click", function(event) {
    if($("#check-preorder-order").is(":checked")) {  
      $("#date-preorder").attr('disabled', false).removeClass("disabled");
      $("#time-preorder").attr('disabled', false).removeClass("disabled");
    } else {
        $("#date-preorder").attr('disabled', true).addClass("disabled");
        $("#time-preorder").attr('disabled', true).addClass("disabled");
    }
  });
  if($("#check-preorder-order-2").is(":checked")) {  
    $("#date-preorder-2").attr('disabled', false).removeClass("disabled");
    $("#time-preorder-2").attr('disabled', false).removeClass("disabled");
  } else {
      $("#date-preorder-2").attr('disabled', true).addClass("disabled");
      $("#time-preorder-2").attr('disabled', true).addClass("disabled");
  }
  $("#check-preorder-order-2").on("click", function(event) {
    if($("#check-preorder-order-2").is(":checked")) {  
      $("#date-preorder-2").attr('disabled', false).removeClass("disabled");
      $("#time-preorder-2").attr('disabled', false).removeClass("disabled");
    } else {
        $("#date-preorder-2").attr('disabled', true).addClass("disabled");
        $("#time-preorder-2").attr('disabled', true).addClass("disabled");
    }
  });
  
  //contacts page tabs
  if ($(window).width() < 1199) {
      $(".contacts__content").addClass("tab-content");    
  }
  // recomendation popup
  $("#recomendation-product-btn").on("click", function(event) {
    event.preventDefault();
    
    if ($(window).width() < 1199) { 
      var title = $(".product__page .title").text();
      $(".recomendation__title").text(title);
    }
    $(".product-two").addClass("is-active");
    $(".recomendation").addClass("is-active");
    if ($(window).width() > 1199) { 
      $(".product").addClass("popup-active");
      $(".product-two").addClass("popup-active");
    }
    $(".recomendation__close").addClass("is-active");
    $(".recomendation__overlay").addClass("is-active");
    if ($(window).width() > 576) {
      $(".recomendation__overlay").on("click", function(event) {
        $(this).removeClass("is-active");
        $(".recomendation").removeClass("is-active");
        if ($(window).width() > 1199) { 
          $(".product").removeClass("popup-active");
          $(".product-two").removeClass("popup-active");
        }
        $(".recomendation__close").removeClass("is-active");
      });
    }
    $(".recomendation__close").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".product-two").removeClass("is-active");
      $(".recomendation__overlay").removeClass("is-active");
      if ($(window).width() > 1199) { 
        $(".product").removeClass("popup-active");
        $(".product-two").removeClass("popup-active");
      }
      $(".recomendation").removeClass("is-active");
    });
    if ($(window).width() < 1199) { 
      $(".recomendation__title").on("click", function(event) {
        $(".recomendation__overlay").removeClass("is-active");
        $(".product").removeClass("popup-active");
        $(".product-two").removeClass("popup-active");
        $(".recomendation").removeClass("is-active");
        $(".product-two").removeClass("is-active");
      });
    }
    
  });

//form account change email
  $("#profile-change-email-btn").on("click", function(event) {
    event.preventDefault();
    $("#change-email-form").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#change-email-form").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#change-email-form')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#change-email-form").removeClass("is-active");
    });
  });
//form account change name
  $("#profile-change-name-btn").on("click", function(event) {
    event.preventDefault();
    $("#change-name-form").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#change-name-form").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#change-name-form')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#change-name-form").removeClass("is-active");
    });
  });

//form account change phone
  $("#profile-change-phone-btn").on("click", function(event) {
    event.preventDefault();
    $("#change-phone-form").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#change-phone-form").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#change-phone-form')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#change-phone-form").removeClass("is-active");
    });
  });
//form account add phone
  $("#profile-add-phone-btn").on("click", function(event) {
    event.preventDefault();
    $("#add-phone-form").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#add-phone-form").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#add-phone-form')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#add-phone-form").removeClass("is-active");
    });
  });
//form account change date
  $("#profile-change-date-btn").on("click", function(event) {
    event.preventDefault();
    $("#change-date-form").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#change-date-form").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#change-date-form')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#change-date-form").removeClass("is-active");
    });
  });
//form account change gender
  $("#profile-change-gender-btn").on("click", function(event) {
    event.preventDefault();
    $("#change-gender-form").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#change-gender-form").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#change-gender-form')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#change-gender-form").removeClass("is-active");
    });
  });
//form account add address
  $("#add-address").on("click", function(event) {
    event.preventDefault();
    $("#new-address").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#new-address").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#new-address')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#new-address").removeClass("is-active");
    });
  });
//form account change address
  $("#change-address-btn").on("click", function(event) {
    event.preventDefault();
    $("#change-address-form").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#change-address-form").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#change-address-form')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#change-address-form").removeClass("is-active");
    });
  });
//form account change address
  $("#change-address-btn-01").on("click", function(event) {
    event.preventDefault();
    $("#change-address-form").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#change-address-form").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#change-address-form')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#change-address-form").removeClass("is-active");
    });
  });
//form account change address
  $("#change-address-btn-02").on("click", function(event) {
    event.preventDefault();
    $("#change-address-form").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#change-address-form").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#change-address-form')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#change-address-form").removeClass("is-active");
    });
  });
//form account change address
  $("#change-address-btn-03").on("click", function(event) {
    event.preventDefault();
    $("#change-address-form").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $("#change-address-form").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $('#change-address-form')[0].reset();
      $(".form__overlay").removeClass("is-active");
      $("#change-address-form").removeClass("is-active");
    });
  });
//form change password profile 
  $(".change__password").on("click", function(event) {
    event.preventDefault();
    $("#change-password-form").addClass("is-active");
    $(".profile").addClass("is-active");    
    $("#save-password-btn").on("click", function(event) {
      $("#change-password-form").removeClass("is-active");
      $(".profile").removeClass("is-active");  
    });
    
  });
//form request
  $(".request").on("click", function(event) {
    event.preventDefault();
    $(".request__form").addClass("is-active");
    $(".overlay").addClass("is-active");
    $(".overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".request__form").removeClass("is-active");
    });
    $(".form__btnClose").on("click", function(event) {
      $(".overlay").removeClass("is-active");
      $(".request__form").removeClass("is-active");
    });
  });
//form
  $(".register").on("click", function(event) {
    event.preventDefault();
    $(".main__form").addClass("is-active");
    $(".overlay").addClass("is-active");
    $(".overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".main__form").removeClass("is-active");
    });
    $(".form__btnClose").on("click", function(event) {
      $(".overlay").removeClass("is-active");
      $(".main__form").removeClass("is-active");
    });
  });
  

//nav-menu
  var nav = $('.container__header');
  if ($(window).width() > 1099) {
    $(".burger-menu").on("click", function(event) {
      event.preventDefault();
      $(".bread__crumbs__container").addClass("hidden");
      $("#nav-menu").addClass("is-active");
      $(".burger-menu").addClass("is-active");
      $("main").addClass("is-active");
      $(".container-fluid").addClass("is-active");
      if ($(window).width() > 1099) {  
        var coutt = "25";
        var leftNavHeight = $(".menu__left").height();  
        $(".menu__right").height(leftNavHeight - coutt); 
      };   
    });
  }
  else{
    $(".burger-menu").on("click", function(event) {
      event.preventDefault();
      $(".bread__crumbs__container").toggleClass("hidden");
      $("#nav-menu").toggleClass("is-active");
      $(".burger-menu").toggleClass("is-active");
      $(".recomendation__overlay").removeClass("is-active");
      $(".product").removeClass("popup-active");
      $(".recomendation").removeClass("is-active");
      $("main").toggleClass("is-active");
      $(".container-fluid").toggleClass("is-active");
      $(".header").toggleClass("is-active");
      if ($(window).width() < 576) { 
        $("header").toggleClass("is-active-mobile");
        $("main").toggleClass("is-active-mobile"); 
        $('html, body').animate({
          scrollTop: nav.offset().top
      }, 10);
      };  
    });
  }
  
  $(".close").on("click", function(event) {
    event.preventDefault();
    $(".bread__crumbs__container").removeClass("hidden");
    $("#nav-menu").removeClass("is-active");
    $(".burger-menu").removeClass("is-active");
    $("main").removeClass("is-active");
    $(".container-fluid").removeClass("is-active");
  });

//select mixbox
  $(".custom__select").on("click", function(event) {
    event.preventDefault();
    $(".solutions-tab-content").toggleClass("is-active");
  });
  $(".mixbox .nav-item a").on("click", function(event) {
    var titleSelect = $(this).text();
    $(".custom__select").text(titleSelect);
    $(".solutions-tab-content").removeClass("is-active");
  });
//bread crumbs  
  if ($(window).width() < 1299) {
    $(".bread__crumbs__text").text("");
  }  

//select busket pc
  $(".select__header").on("click", function(event) {
    event.preventDefault();
    $(".select__body").toggleClass("is-active");
  });
  $(".select__item").on("click", function(event) {
    var valueSelect = $(this).text();
    $(".select__current").text(valueSelect);
    $(".select__body").removeClass("is-active");
  });
  
// scroll mixbox select
  if ($(document).scrollTop() > $(".wrap__select").height()) {
    $(".wrap__select").toggleClass("scrolled");
  }

  $(window).on("scroll", function() {
    $(".wrap__select").toggleClass(
      "scrolled",
      $(this).scrollTop() > $(".wrap__select").height()
    );
  });  

  
//profile exit popup
  $(".header__exit").on("click", function(event) {
    event.preventDefault();
    $(".bread__crumbs__container").addClass("hidden");
    $(".account__formWrap").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__btnClose").on("click", function(event) {
      event.preventDefault();
      $(".bread__crumbs__container").removeClass("hidden");
      $(".account__formWrap").removeClass("is-active");      
      $(".form__overlay").removeClass("is-active");  
      $(".account__form").addClass("is-active");
      $(".account__formRecovery").removeClass("is-active"); 
      $(".account__formRegistration").removeClass("is-active");   
    });
    $(".form__overlay").on("click", function(event) {
      event.preventDefault();
      $(".bread__crumbs__container").removeClass("hidden");
      $(".account__formWrap").removeClass("is-active");
      $(".form__overlay").removeClass("is-active");    
      $(".account__form").addClass("is-active");
      $(".account__formRecovery").removeClass("is-active"); 
      $(".account__formRegistration").removeClass("is-active");   
    });
    //profile Recovery Password
    $(".simple__btn").on("click", function(event) {
      event.preventDefault();
      $(".account__form").removeClass("is-active");
      $(".account__formRecovery").addClass("is-active");      
    });
    //profile Recovery Password
    $(".registration").on("click", function(event) {
      event.preventDefault();
      $(".account__form").removeClass("is-active");
      $(".account__formRegistration").addClass("is-active");      
    });
  });

  if ($(window).width() < 576){
    $(".entrance").on("click", function(event) {
      event.preventDefault();
      $("main").addClass("is-active");
      $(".account__formWrap").addClass("is-active");
      $(".form__overlay").addClass("is-active__mobile");
      $("#nav-menu").removeClass("is-active");
      $(".burger-menu").removeClass("is-active");
      $(".recomendation__overlay").removeClass("is-active");
      $(".product").removeClass("popup-active");
      $(".recomendation").removeClass("is-active");
      $("main").removeClass("is-active");
      $(".container-fluid").removeClass("is-active");
      $(".header").removeClass("is-active");
      $("header").removeClass("is-active-mobile");
      $("main").removeClass("is-active-mobile");
      $(".form__btnClose").on("click", function(event) {
        event.preventDefault();
        $(".account__formWrap").removeClass("is-active");      
        $(".form__overlay").removeClass("is-active__mobile");  
        $(".account__form").addClass("is-active");
        $(".account__formRecovery").removeClass("is-active"); 
        $(".account__formRegistration").removeClass("is-active");
        $("main").removeClass("is-active");   
      });
      $(".form__overlay").on("click", function(event) {
        event.preventDefault();
        $(".account__formWrap").removeClass("is-active");
        $(".form__overlay").removeClass("is-active__mobile");    
        $(".account__form").addClass("is-active");
        $(".account__formRecovery").removeClass("is-active"); 
        $(".account__formRegistration").removeClass("is-active");   
        $("main").removeClass("is-active"); 
      });
      //profile Recovery Password
      $(".simple__btn").on("click", function(event) {
        event.preventDefault();
        $(".account__form").removeClass("is-active");
        $(".account__formRecovery").addClass("is-active");      
      });
      //profile Recovery Password
      $(".registration").on("click", function(event) {
        event.preventDefault();
        $(".account__form").removeClass("is-active");
        $(".account__formRegistration").addClass("is-active");      
      });
    });
  }

    $.datepicker.regional.ru = {
      closeText: "Закрыть",
      prevText: "&#x3C;Пред",
      nextText: "След&#x3E;",
      currentText: "Сегодня",
      monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
      "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
      monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
      "Июл","Авг","Сен","Окт","Ноя","Дек" ],
      dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
      dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
      dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
      weekHeader: "Нед",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: "" };
    $.datepicker.setDefaults( $.datepicker.regional.ru );
    $( ".calendar" ).datepicker({
    dateFormat: "dd.mm.yy",
    changeYear: true,
    minDate: new Date(2011, 6, 26),
    maxDate: new Date(2025, 11, 15),
    onSelect: function(date) {
        //здесь можно добавить обработчики выбора даты
    },
  });

});
//BackForm input-file
function getFileName() {
  let file = document.getElementById("uploaded-file").value;

  file = file
    .replace(/\\/g, "/")
    .split("/")
    .pop();

  document.getElementById("file-name").innerHTML =
    '<div id="del__container" class="del__container">' +
    file +
    '<span id="del-file"><span onclick="RemoveFunc()" class="name del-file-btn">Удалить файл</span></span>' +
    "</div>";
}
function RemoveFunc() {
  document.getElementById("uploaded-file").value = null;

  let remove = document.getElementById("del__container").remove();
  return false;
}
jQuery(function($){
   $("input[type='tel']").mask("+375 (99) 999-99-99");
   $(".time").mask("99 : 99");
});

