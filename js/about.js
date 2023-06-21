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
// fixed_proup : e
