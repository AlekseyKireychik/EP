

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
    $(".bread__crumbs").text("");
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
      $(".form__overlay").addClass("is-active");
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
        $(".form__overlay").removeClass("is-active");  
        $(".account__form").addClass("is-active");
        $(".account__formRecovery").removeClass("is-active"); 
        $(".account__formRegistration").removeClass("is-active");
        $("main").removeClass("is-active");   
      });
      $(".form__overlay").on("click", function(event) {
        event.preventDefault();
        $(".account__formWrap").removeClass("is-active");
        $(".form__overlay").removeClass("is-active");    
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

  //BackForm input-file
    function getFileName() {
      var file = $("#uploaded-file").value;
      file = file
        .replace(/\\/g, "/")
        .split("/")
        .pop();
      var htmlFragment = '<div id="del__container" class="del__container">' +
      file +
      '<span id="del-file"><span onclick="RemoveFunc()" class="name del-file-btn">Удалить файл</span></span>' +
      "</div>";
        $("#file-name").text(htmlFragment);        
    }
    function RemoveFunc() {
      $("#uploaded-file").val() = null;

      var remove = $("#del__container").remove();
      return false;
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

// //BackForm input-file
// function getFileName() {
//   var file = document.getElementById("uploaded-file").value;

//   file = file
//     .replace(/\\/g, "/")
//     .split("/")
//     .pop();

//   document.getElementById("file-name").innerHTML =
//     '<div id="del__container" class="del__container">' +
//     file +
//     '<span id="del-file"><span onclick="RemoveFunc()" class="name del-file-btn">Удалить файл</span></span>' +
//     "</div>";
// }
// function RemoveFunc() {
//   document.getElementById("uploaded-file").value = null;

//   var remove = document.getElementById("del__container").remove();
//   return false;
// }
window.onload = function() {

  // Mask input tel
  var phoneAll = document.querySelectorAll(".validate-numeric");
    phoneAll.forEach(element => {
      element.onfocus = function() {
        MaskedInput({
          elm: element,
          format: '+375 (__) ___-__-__',
          separator: '+375 (   )-'
        });
      };
    });
  
  // Mask input time
  var timeAll = document.querySelectorAll(".time");
    timeAll.forEach(element => {
      element.onfocus = function() {
        MaskedInput({
          elm: element,
          format: '__ : __',
          separator: ' : '
        });
      };
    });  
  
    // Start custom select
    var select = function() {
      var selectHeader = document.querySelectorAll(".select__header");
      var selectItem = document.querySelectorAll(".select__item");
      var selectItemActive = document.querySelectorAll(".address__select");
    
      selectHeader.forEach(item => {
        item.addEventListener("click", selectToggle);
      });
    
      selectItem.forEach(item => {
        item.addEventListener("click", selectChoose);
      });
    
      function selectToggle() {
        this.parentElement.classList.toggle("is-active");
      }
      function selectChoose() {
        var text = this.innerText,
            select = this.closest(".address__select"),
            currentText = select.querySelector(".select__current");
        currentText.innerText = text;
        select.classList.remove("is-active");
        select.classList.add("selected");
      }
    };  
    select();  
    // End custom select
  
  };
  
  // masked_input_1.4-min.js
  (function(a){a.MaskedInput=function(f){if(!f||!f.elm||!f.format){return null}if(!(this instanceof a.MaskedInput)){return new a.MaskedInput(f)}var o=this,d=f.elm,s=f.format,i=f.allowed||"0123456789",h=f.allowedfx||function(){return true},p=f.separator||"/:-",n=f.typeon||"_YMDhms",c=f.onbadkey||function(){},q=f.onfilled||function(){},w=f.badkeywait||0,A=f.hasOwnProperty("preserve")?!!f.preserve:true,l=true,y=false,t=s,j=(function(){if(window.addEventListener){return function(E,C,D,B){E.addEventListener(C,D,(B===undefined)?false:B)}}if(window.attachEvent){return function(D,B,C){D.attachEvent("on"+B,C)}}return function(D,B,C){D["on"+B]=C}}()),u=function(){for(var B=d.value.length-1;B>=0;B--){for(var D=0,C=n.length;D<C;D++){if(d.value[B]===n[D]){return false}}}return true},x=function(C){try{C.focus();if(C.selectionStart>=0){return C.selectionStart}if(document.selection){var B=document.selection.createRange();return -B.moveStart("character",-C.value.length)}return -1}catch(D){return -1}},b=function(C,E){try{if(C.selectionStart){C.focus();C.setSelectionRange(E,E)}else{if(C.createTextRange){var B=C.createTextRange();B.move("character",E);B.select()}}}catch(D){return false}return true},m=function(D){D=D||window.event;var C="",E=D.which,B=D.type;if(E===undefined||E===null){E=D.keyCode}if(E===undefined||E===null){return""}switch(E){case 8:C="bksp";break;case 46:C=(B==="keydown")?"del":".";break;case 16:C="shift";break;case 0:case 9:case 13:C="etc";break;case 37:case 38:case 39:case 40:C=(!D.shiftKey&&(D.charCode!==39&&D.charCode!==undefined))?"etc":String.fromCharCode(E);break;default:C=String.fromCharCode(E);break}return C},v=function(B,C){if(B.preventDefault){B.preventDefault()}B.returnValue=C||false},k=function(B){var D=x(d),F=d.value,E="",C=true;switch(C){case (i.indexOf(B)!==-1):D=D+1;if(D>s.length){return false}while(p.indexOf(F.charAt(D-1))!==-1&&D<=s.length){D=D+1}if(!h(B,D)){c(B);return false}E=F.substr(0,D-1)+B+F.substr(D);if(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1){D=D+1}break;case (B==="bksp"):D=D-1;if(D<0){return false}while(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1&&D>1){D=D-1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);break;case (B==="del"):if(D>=F.length){return false}while(p.indexOf(F.charAt(D))!==-1&&F.charAt(D)!==""){D=D+1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);D=D+1;break;case (B==="etc"):return true;default:return false}d.value="";d.value=E;b(d,D);return false},g=function(B){if(i.indexOf(B)===-1&&B!=="bksp"&&B!=="del"&&B!=="etc"){var C=x(d);y=true;c(B);setTimeout(function(){y=false;b(d,C)},w);return false}return true},z=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if((C.metaKey||C.ctrlKey)&&(B==="X"||B==="V")){v(C);return false}if(C.metaKey||C.ctrlKey){return true}if(d.value===""){d.value=s;b(d,0)}if(B==="bksp"||B==="del"){k(B);v(C);return false}return true},e=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if(B==="etc"||C.metaKey||C.ctrlKey||C.altKey){return true}if(B!=="bksp"&&B!=="del"&&B!=="shift"){if(!g(B)){v(C);return false}if(k(B)){if(u()){q()}v(C,true);return true}if(u()){q()}v(C);return false}return false},r=function(){if(!d.tagName||(d.tagName.toUpperCase()!=="INPUT"&&d.tagName.toUpperCase()!=="TEXTAREA")){return null}if(!A||d.value===""){d.value=s}j(d,"keydown",function(B){z(B)});j(d,"keypress",function(B){e(B)});j(d,"focus",function(){t=d.value});j(d,"blur",function(){if(d.value!==t&&d.onchange){d.onchange()}});return o};o.resetField=function(){d.value=s};o.setAllowed=function(B){i=B;o.resetField()};o.setFormat=function(B){s=B;o.resetField()};o.setSeparator=function(B){p=B;o.resetField()};o.setTypeon=function(B){n=B;o.resetField()};o.setEnabled=function(B){l=B};return r()}}(window));
  
