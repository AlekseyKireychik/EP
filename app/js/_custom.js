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

jQuery.each(jQuery("textarea[data-autoresize]"), function() {
  var offset = this.offsetHeight - this.clientHeight;

  var resizeTextarea = function(el) {
    jQuery(el)
      .css("height", "auto")
      .css("height", el.scrollHeight + offset);
  };
  jQuery(this)
    .on("keyup input", function() {
      resizeTextarea(this);
    })
    .removeAttr("data-autoresize");
});

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
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
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
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
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
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
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
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
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
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
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
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick"
      }
    ]
  });

  //newpost
  // $(".newpost-slider").on("init", function(event, slick) {
  //   $(".newpost__counter").text(1 + " / " + slick.slideCount);
  // });
  // $(".newpost-slider").on("reInit", function(event, slick) {
  //   $(".newpost__counter").text(1 + " / " + slick.slideCount);
  // });
  // $(".newpost-slider").on("afterChange", function(
  //   event,
  //   slick,
  //   currentSlide,
  //   nextSlide
  // ) {
  //   $(".newpost__counter").text(currentSlide + 1 + " / " + slick.slideCount);
  // });
  // $(".newpost-slider").slick({
  //   infinite: true,
  //   dots: false,
  //   arrows: true,
  //   speed: 300,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   variableWidth: true,
  //   autoplay: true,
  //   adaptiveHeight: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1300,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         arrows: true,
  //         infinite: true
  //       }
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: true,
  //         infinite: true
  //       }
  //     }
  //   ]
  // });

  //vacancies
  // $(".vacancies__btn").on("click", function(event) {
  //   event.preventDefault();
  //   if ($(this).hasClass("is-active")) {
  //     $(".panel-title").removeClass("is-active");
  //     $(".vacancies__btn").removeClass("is-active");
  //   } else {
  //     $(".panel-title").removeClass("is-active");
  //     $(".vacancies__btn").removeClass("is-active");
  //     $(this)
  //       .closest(".panel-heading")
  //       .children(".panel-title")
  //       .addClass("is-active");
  //     $(this).addClass("is-active");
  //   }
  // });


  //show - hide text in slider
  // $(".show").on("click", function(event) {
  //   event.preventDefault();
  //   $(this)
  //     .closest(".advantages__caption")
  //     .children(".hide")
  //     .slideToggle(function() {
  //       console.log($(event.target).is(":visible"));
  //       $(event.target).text(
  //         $(this).is(":visible") ? "Читать меньше..." : "Читать больше..."
  //       );
  //     });
  // });

  //contacts page tabs
  if ($(window).width() < 1199) {
      $(".contacts__content").addClass("tab-content");    
  }
  // recomendation popup
  $("#recomendation-product-btn").on("click", function(event) {
    event.preventDefault();
    $(".recomendation").addClass("is-active");
    $(".recomendation__close").addClass("is-active");
    $(".recomendation__overlay").addClass("is-active");
    $(".recomendation__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".recomendation").removeClass("is-active");
      $(".recomendation__close").removeClass("is-active");
    });
    $(".recomendation__close").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".recomendation__overlay").removeClass("is-active");
      $(".recomendation").removeClass("is-active");
    });
  });

   //form account change email
   $("#change-btn").on("click", function(event) {
    event.preventDefault();
    $(".account__change__email").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".account__change__email").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $(".form__overlay").removeClass("is-active");
      $(".account__change__email").removeClass("is-active");
    });
  });

   //form account add address
   $("#add-address").on("click", function(event) {
    event.preventDefault();
    $(".account__new__address").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__overlay").on("click", function(event) {
      $(this).removeClass("is-active");
      $(".account__new__address").removeClass("is-active");
    });
    $(".change__close").on("click", function(event) {
      $(".form__overlay").removeClass("is-active");
      $(".account__new__address").removeClass("is-active");
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

  $(document).on("keypress", ".validate-numeric", function(event) {
    return isNumber(event);
  });

  function isNumber(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    if (unicode != 8 && unicode != 9) {
      //if the key isn't the backspace key (which we should allow)
      if (unicode < 48 || unicode > 57)
        //if not a number
        return false; //disable key press
    }
  }

   //form change password profile 
   $(".change__password").on("click", function(event) {
    event.preventDefault();
    $(".profile__wrapinfo").addClass("is-active");
    $("#change-password-form").addClass("is-active");
  });
  //nav-menu
  if ($(window).width() > 576) {
    $(".burger-menu").on("click", function(event) {
      event.preventDefault();
      $("#nav-menu").addClass("is-active");
      $(".burger-menu").addClass("is-active");
    });
  }
  else{
    $(".burger-menu").on("click", function(event) {
      event.preventDefault();
      $("#nav-menu").toggleClass("is-active");
      $(".burger-menu").toggleClass("is-active");
    });
  }
  

  $(".close").on("click", function(event) {
    event.preventDefault();
    $("#nav-menu").removeClass("is-active");
    $(".burger-menu").removeClass("is-active");
  });

  
  //profile exit popup
  $(".header__exit").on("click", function(event) {
    event.preventDefault();
    $(".account__formWrap").addClass("is-active");
    $(".form__overlay").addClass("is-active");
    $(".form__btnClose").on("click", function(event) {
      event.preventDefault();
      $(".account__formWrap").removeClass("is-active");      
      $(".form__overlay").removeClass("is-active");  
      $(".account__form").addClass("is-active");
      $(".account__formRecovery").removeClass("is-active"); 
      $(".account__formRegistration").removeClass("is-active");   
    });
    $(".form__overlay").on("click", function(event) {
      event.preventDefault();
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

});
