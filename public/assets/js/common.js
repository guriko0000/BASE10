

// ハンバーガーメニュー
// ________________________________________________________
const header = document.querySelector('.js-header');
const headerBtn = document.querySelector('.js-header-btn');
const subNav = document.querySelector('.p-sub-nav'); // ハンバーガーメニュー内ナビを選択

headerBtn.addEventListener('click', () => {
  const isOpen = header.classList.toggle('active'); // activeクラスの追加/削除をトグルし、状態を取得
  headerBtn.setAttribute('aria-expanded', isOpen); // aria-expanded属性を更新
  subNav.setAttribute('aria-hidden', !isOpen); // aria-hidden属性を更新
});


// ヘッダーサブナビクラス名追加
$('.js-header-btn').on('click', function () {
  $('.p-sub-nav').toggleClass('visible');
}); 

// ページ内リンク飛ぶ用の追記
$('.js-header-nav a[href]').on('click', function(event) {
  $('.js-header-btn').trigger('click');
});


// ナビのカレント表示
// ________________________________________________________
$(function () {
  $('.js-tab01').each(function () {
    if (this.href == location.href) {
      $(this).parents('li').addClass('current');
    }
  });
});


// page-topスムーススクロール
// ________________________________________________________
$(function() {
  $('.js-page-top').hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 250) {
        $('.js-page-top').fadeIn(250);
      } else {
        $('.js-page-top').fadeOut(250);
        }
    });
    $('.js-page-top').click(function(){
    $('html, body').animate({scrollTop: 0}, 250);
  });
});


// アコーディオン
// ________________________________________________________
$(function() {
  $(".js-accordion-btn").on("click", function() {
    const content = $(this).parent(".c-accordion__title").next(".c-accordion__body"); // アコーディオンの内容部分
    const isExpanded = $(this).attr("aria-expanded") === "true"; // 現在の状態を取得
    
    // aria-expandedを切り替える
    $(this).attr("aria-expanded", !isExpanded);
    
    // aria-hiddenを切り替える
    content.attr("aria-hidden", isExpanded);
    
    $(this).toggleClass("is-open"); // クラスを切り替える
    content.slideToggle(300);
  });
});


// header高さ引いてスムーススクロール
// ________________________________________________________
// 固定ヘッダー分リンク飛ばした時調整
  if(window.matchMedia("(max-width: 767px)").matches){
    $(function () {
      var headerHight = 60;
      $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - headerHight;
      $("html, body").animate({ scrollTop: position }, 200, "linear");
      return false;
      });
      });
  }else{ 
    $(function () {
      var headerHight = 120;
      $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - headerHight;
      $("html, body").animate({ scrollTop: position }, 250, "linear");
      return false;
      });
      });
  }



// スクロールしたらふわっと
// ________________________________________________________

// 下から表示
function fadeAnime(){
  $('.fadeUpTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight + 240){
    $(this).addClass('fadeup');
    }
  });
}

$(window).scroll(function (){
  fadeAnime();
});


// 右から表示
function fadeAnime2(){
  $('.fadeRightTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight + 240){
    $(this).addClass('fadeRight');
    }
  });
}

$(window).scroll(function (){
  fadeAnime2();
});


// 350px以下スケーリング
// ________________________________________________________
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value = window.outerWidth > 350 ? 'width=device-width,initial-scale=1' : 'width=390';
    if (viewport && viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  window.addEventListener('resize', switchViewport);
  switchViewport();
})();


// スライダー
// ________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  // splide1
  const splideElement1 = document.querySelector(".splide");
  if (splideElement1) {
    const splide1 = new Splide(splideElement1, {
      type: "loop",
      perPage: 2.8,
      perMove: 1,
      gap: 50,
      clones: 10,
      pagination: false,
      arrowPath: 'M28.5458 20.7071C28.9363 20.3166 28.9363 19.6834 28.5458 19.2929L22.1819 12.9289C21.7913 12.5384 21.1582 12.5384 20.7676 12.9289C20.3771 13.3195 20.3771 13.9526 20.7676 14.3431L26.4245 20L20.7676 25.6569C20.3771 26.0474 20.3771 26.6805 20.7676 27.0711C21.1582 27.4616 21.7913 27.4616 22.1819 27.0711L28.5458 20.7071ZM13 21L27.8387 21L27.8387 19L13 19L13 21Z',
      breakpoints: {
        1200: {
          gap: 30,
        },
        767: {
          perPage: 1.3,
          gap: 20,
        },
      },
    });
    splide1.mount();
  }
});