jQuery(function ($) {

// swiper
// ________________________________________________________

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
  effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});




// 一定量クラス名付与
// ________________________________________________________

function scrollFunction() {
  var this_y = window.pageYOffset;
  if (this_y > 390) {
  document.getElementById("topbg").classList.add("scroll");
  } else {
  document.getElementById("topbg").classList.remove("scroll");
  }
  }
  window.onload = function() {
  scrollFunction();
  }
  window.onscroll = function() {
  scrollFunction();
  }



  
});