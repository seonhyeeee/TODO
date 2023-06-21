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

// 아코디언
const items = document.querySelectorAll('.item');

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(items, {
    width: item.clicked ? '13.5vw' : '8.1vw',
    duration: 2,
    ease: 'elastic(1, .6)' });


  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? '35vw' : '13.5vw',
    duration: 2.5,
    ease: 'elastic(1, .3)' });

};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener('click', () => expand(item, i));
});


$(".item").click(function(){
  $(this).children(".item_a").css({
    'opacity': '1'
  });
  $(this).siblings(".item").children(".item_a").css({
    'opacity': '0'
  });
});
