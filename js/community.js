// slide : s

// 최상단 슬라이드
const slideList = document.querySelector('ul.slide_list');
const slidePage = slideList.querySelectorAll('.slide_page');
const pageLen = slidePage.length; // li 길이
const slidePageWidth = 100 / (pageLen + 2); // li 너비 계산
const pageNum = document.querySelector('.page_num');
const state = document.querySelector('.state');
let curIdx = 0;
let curPage = slidePage[curIdx]; // 활성화 슬라이드 선언
curPage.classList.add('active');

slideList.style.width = `${100 * (pageLen + 2)}%`; // ul 너비 지정
slidePage.forEach((element) => {
    element.style.width = `${slidePageWidth}%`;
}); // li 너비 지정

// 슬라이드 양 끝에 슬라이드 복제하기
const slidePageFirst = slideList.firstElementChild.cloneNode(true);
const slidePageLast = slideList.lastElementChild.cloneNode(true);
slideList.appendChild(slidePageFirst);
slideList.insertBefore(slidePageLast, slideList.firstElementChild);

slideList.lastElementChild.classList.remove('active'); // 복제된 슬라이드로부터 따라온 active 제거

// 페이지 로드되면 자동재생
let setting; // clear를 위한 전역함수 선언

function autoPlay() {
    setting = setInterval(() => {
        slideList.style.transition = '1s';
        slideList.style.transform = `translateX(-${slidePageWidth * (curIdx + 2)}%`;

        curPage.classList.remove('active'); // 지나간 슬라이드
        
        curIdx++;

        curPage = slidePage[curIdx];
        pageNum.textContent = curIdx + 1;
        state.style.width = `${20 * (curIdx + 1)}%`;

        if(curIdx === pageLen) {
            setTimeout(() => {
                slideList.style.transition = '0s';
                slideList.style.transform = `translateX(-${slidePageWidth}%`;
            },1001);
            curIdx = 0;
            curPage = slidePage[curIdx];
            pageNum.textContent = curIdx + 1;
            state.style.width = '20%';
        };

        curPage.classList.add('active');
    },4000);
};

document.addEventListener("DOMContentLoaded", () => {
    autoPlay();
});

// 다음 페이지로 이동
function nextPage() {
    slideList.style.transition = '1s';
    slideList.style.transform = `translateX(-${slidePageWidth * (curIdx + 2)}%`;

    curPage.classList.remove('active'); // 지나간 슬라이드

    curIdx++;

    curPage = slidePage[curIdx];
    pageNum.textContent = curIdx + 1;
    state.style.width = `${20 * (curIdx + 1)}%`;

    if(curIdx === pageLen) {
        setTimeout(() => {
            slideList.style.transition = '0s';
            slideList.style.transform = `translateX(-${slidePageWidth}%`;
        },1001);
        curIdx = 0;
        curPage = slidePage[curIdx];
        pageNum.textContent = curIdx + 1;
        state.style.width = '20%';
    };

    curPage.classList.add('active');
};

// 다음버튼 클릭
const btnNext = document.querySelector('.btn.next');
let click = true;

btnNext.addEventListener('click', () => {
    if (click) {
        clearInterval(setting); // 자동재생 중지
        
        nextPage();

        autoPlay();

        click = !click;

        // transition(1s) 완료 후 클릭이 또 가능하도록
        setTimeout(() => {
            click = true;
        },1000)
    }
});

// 이전 페이지로 이동
function prevPage() {
    slideList.style.transition = '1s';
    slideList.style.transform = `translateX(-${slidePageWidth * curIdx}%`;

    curPage.classList.remove('active'); // 지나간 슬라이드

    curIdx--;

    curPage = slidePage[curIdx];
    pageNum.textContent = curIdx + 1;
    state.style.width = `${20 * (curIdx + 1)}%`;

    if(curIdx === -1) {
        setTimeout(() => {
            slideList.style.transition = '0s';
            slideList.style.transform = `translateX(-${slidePageWidth * pageLen}%`;
        },1001);
        curIdx = pageLen - 1;
        curPage = slidePage[curIdx];
        pageNum.textContent = curIdx + 1;
        state.style.width = '100%';
    };

    curPage.classList.add('active');
};

// 이전버튼 클릭
const btnPrev = document.querySelector('.btn.prev');

btnPrev.addEventListener('click', () => {
    if (click) {
        clearInterval(setting); // 자동재생 중지
        
        prevPage();

        autoPlay();

        click = !click;

        // transition(1s) 완료 후 클릭이 또 가능하도록
        setTimeout(() => {
            click = true;
        },1000)
    }
});
// slide : e

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

// section3_tab : s

function openBoard(evt, boardName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("board");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" opacity", "");
    }
    document.getElementById(boardName).style.display = "block";
    evt.currentTarget.className += " opacity";
}
// section3_tab : e

// section3_board_bottom : s
$('.option_wrap').hide();
$('#select_btn').click(function(){
    $('.option_wrap').toggle();
});
$(function () {
    $("#select_btn").click(function () {
        $(this).children().children("img").toggleClass("turn");
     });
});
function option1(){
        document.getElementById('select').innerHTML = '제목'
        $('.option_wrap').hide()
    };
function option2(){
        document.getElementById('select').innerHTML = '글쓴이'
        $('.option_wrap').hide()
    };
function option3(){
        document.getElementById('select').innerHTML = '작성일'
        $('.option_wrap').hide()
    };
function option4(){
        document.getElementById('select').innerHTML = '조회'
        $('.option_wrap').hide()
    };
// section3_board_bottom : e

// section3_ toggle : s
$(function(){	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
		$( '.c p' ).toggleClass( 'ab' );
	});	
	$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
		$( '.d p' ).toggleClass( 'ab' );
	});
	$(".right> li> .font2").click(function(){
		$(this).next().slideToggle();
		$( '.e p' ).toggleClass( 'ab' );
	});
	$(".right> li> .font3").click(function(){
		$(this).next().slideToggle();
		$( '.f p' ).toggleClass( 'ab' );
	});
	$(".right> li> .font4").click(function(){
		$(this).next().slideToggle();
		$( '.g p' ).toggleClass( 'ab' );
	});
});
$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});

// section3_ toggle : e

// 자동슬라이드
$(document).on('ready', function () {
    $(".regular").slick({
      infinite: true, /* 맨끝이미지에서 끝나지 않고 다시 맨앞으로 이동 */
      slidesToShow: 5, /* 화면에 보여질 이미지 갯수*/
      slidesToScroll: 1,  /* 스크롤시 이동할 이미지 갯수 */
      autoplay: true, /* 자동으로 다음이미지 보여주기 */
      /*arrows: true,  화살표 */
      /*dots:true,  아래점 */
      cssEase: 'linear',  /* 등속 */
      autoplaySpeed: 0,/* 다음이미지로 넘어갈 시간 */
      speed: 1500, /* 다음이미지로 넘겨질때 걸리는 시간 */
      /*pauseOnHover: true,  마우스 호버시 슬라이드 이동 멈춤 */        
      //vertical:true,/* 세로방향으로 슬라이드를 원하면 추가하기// 기본값 가로방향 슬라이드*/ 
      draggable : true, 	//드래그 가능 여부 	
    });

  });