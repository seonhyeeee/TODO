// search_popup : s
$("#search_popup").hide();

$(".search_popup_open a").click(function () {
  $('#search_popup').fadeIn(0);
});
$(".search_popup_close").click(function () {
  $('#search_popup').fadeOut(0);
});
// search_popup : e

// fixed_group
$('#btn_top').hide();
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('#btn_top').fadeIn()
  } else {
    $('#btn_top').fadeOut()
  }
});
$('#btn_top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});


// section3_weekly_best : s
var swiper = new Swiper(".mySwiper", {
  loop: true,
  loopAdditionalSlides: 1,
  spaceBetween: 20,
  slidesPerView: 3,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// section3_weekly_best : e


// ex : s
let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');

const scrollInProgress = () => {
  didScroll = true
}

const raf = () => {
  if (didScroll) {
    paralaxTitles.forEach((element, index) => {
      element.style.transform = "translateX(" + window.scrollY / 10 + "%)"
    })
    didScroll = false;
  }
  requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)

// number_counterup
jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 4000
  });
});
