$(document).ready(function () {
  // header hide
  // $(window).scroll(function (event) {
  //   // 스크롤 이벤트 발생에 대한 각종 정보들이 있다. 펑션은 익명함수인데 이벤트에 대한 정보를 받아온다.
  //   let st = $(this).scrollTop();
  //   console.log(st)
  //   if (st > 386) {
  //     $('.header').addClass('hide')
  //     $('.mb-bt').addClass('hide')
  //   } else {
  //     $('.header').removeClass('hide')
  //     $('.mb-bt').removeClass('hide')
  //   }
  // })

  // 모바일 메뉴 기능
  // .mb-bt를 저장해서 활용하자
  $('.mb-bt').click(function (e) {
    e.preventDefault();
    $('.mb-bt').toggleClass('mb-bt-open')
    // $('this').toggleClass('mb-bt-open') 라고도 씀.
    $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
    $('.mb-nav').toggleClass('mb-nav-open')
    $('.mb-menu>li').height(54)
    // 마지막꺼 안하면 정리안된채로 나옴
  })
  // e는 받아오는 매게변수 공간만 있으면 됨. e꼭 안써도됨. 

  // 화면사이즈체크
  $(window).resize(function () {
    let temp = $(window).width();
    // console.log(temp)
    if (temp > 1220) {
      $('.mb-bt').removeClass('mb-bt-open')
      $('.mb-menu-mask').removeClass('mb-menu-mask-active')
      $('.mb-nav').removeClass('mb-nav-open')
    } else {
      $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
      $('.all-menu-mask').removeClass('all-menu-mask-active')
    }
  })
  // 모바일 메뉴 펼치기 기능
  // 1. 모바일 메뉴 불러오기
  const mb_mainmenu = $('.mb-mainmenu')

  // 2. 모바일 서브메뉴 불러오기
  const mb_submenu = $('.mb-submenu')

  // 3. 펼쳐진 서브메뉴의 높이값
  let mb_submenu_height = [];
  // []배열

  // 4. 높이값 계산을 실행
  // 배열명.forEach(function(item,index){할일})
  // $.each(배열명, function(index, item){할일})
  // each도 index로 객체를 넘겨줌. 그러나 순서가 다름. 인덱스 아이템(또는 element)
  $.each(mb_submenu, function (index) {
    // 각각의 .mb-submenu로 가서
    // li의 개수를 한다.
    let count = $(this).find('li').length;
    // this 는 mb_submenu를 의미
    // console.log(count)
    // 최종결과 저장(51px*count+22) <=51이 5개 있고 패딩값 11 두개 합치면..!
    mb_submenu_height[index] = 51 * count + 22;
  })
  // console.log(mb_submenu_height)
  let mb_li = $('.mb-menu > li')
  $.each(mb_mainmenu, function (index) {

    $(this).click(function (e) {
      e.preventDefault();
      // mb-mainmenu-open이 있으면 펼치고 없으면 닫기
      $(this).toggleClass('mb-mainmenu-open')
      let active = $(this).hasClass('mb-mainmenu-open')
      if (active) {
        let temp = mb_submenu_height[index]
        // 해당되는 (클릭된)  li>a(depth1)의 ul의 높이값을 temp에 저장
        mb_li.eq(index).height(temp + 54)
        mb_li.eq(index).siblings().height(54)
        $(this).toggleClass('mb-mainmenu-open')
        // 해당요소의 높이부여 
        // eq은 equal 인데 
      } else {
        // 클릭이 안된경우
        mb_li.eq(index).height(54)
        //index[]은 반복문이라 첫번째것 index[0]이다.
        // (index)는 반복은 아닌데 연동되는 0에 해당되는li, 건드리면되기때문에 eq을 적어줌.
        // eq이나 each 많이씀!
      }
    })
  })
  
  // 모바일 메뉴 배경을 클릭시 사라짐
  const mb_menu_mask = $('.mb-menu-mask')
  mb_menu_mask.click(function () {
    // 모바일 버튼 기능 초기화
    $('.mb-bt').removeClass('mb-bt-open')
    $('.mb-menu-mask').removeClass('mb-menu-mask-active')
    $('.mb-nav').removeClass('mb-nav-open')
    $('.mb-menu >li').height(54)
    $('.mb-mainmenu').removeClass('mb-mainmenu-open')
  })



})

const header = document.querySelector('header'),
    nav = document.querySelector('.main_nav')

// nav mouse 올리면 header높이 300으로 증가,
// nav mouseleave시 header높이 50(원래)로 변경

nav.addEventListener('mouseover', function () {
    header.style.height = '440px'
});
nav.addEventListener('mouseout', function () {
    header.style.height = '140px'
});


$(function () {
    const $window = $(window),
        header = $('.header'),
        topLogo = $('.top_logo');
    headerOffsetTop = header.offset().top;

    // console.log(headerOffsetTop);
    $window.scroll(function () {
        //window의 스크롤양이 .page-header의 위치보다 많으면 .page-header의 포지션을 sticky로 변경하여 고정시킨다.
        if ($(this).scrollTop() > headerOffsetTop) {
            header.addClass('sticky')
            topLogo.addClass('sticky')

        } else {
            header.removeClass('sticky')
            topLogo.removeClass('sticky')
        }
    })

});

$(document).ready(function(){
  new Swiper(".sw-visual", {
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    autoplay: true,
    loop: true,
    effect: "fade",
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionStart : function() {
        $('.box').hide(0);
      },
      slideChangeTransitionEnd : function() {
        $('.box').show(0);
      }
    },
  });




  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 100,
    autoplay: true,
    loop: true,
    effect: "horizontal",
    speed: 500,
    // centeredSlides: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      1860: {
        slidesPerView: 6,
      },
      1815: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1480: {
        slidesPerView: 6,
      },
      1330: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      // 1150: {
      //   slidesPerView:4,
      // },
      950: {
        slidesPerView: 4,
      },
      620: {
        slidesPerView: 3,
      },
      380: {
        // spaceBetween:100,
      }

    },
    navigation: {
      nextEl: ".fravor-button-next",
      prevEl: ".fravor-button-prev",
    },
  });
});



$(document).ready(function(){
       //해당 위치 스크롤시 스토어 애니메이션 작동
    $(window).scroll(function(){
        if($(this).scrollTop()>=2200){
            $('.brand_story, .find_store').addClass('on');
        }else {
            $('.brand_story, .find_store').removeClass('on');
        }
    })
   });






