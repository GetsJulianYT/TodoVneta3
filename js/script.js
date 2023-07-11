var productSwipers = document.querySelectorAll(".swiper-mySwiper-2");

productSwipers.forEach(function (swiperContainer) {
  var swiper = new Swiper(swiperContainer, {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
});

var menuCheckbox = document.getElementById("menu");
var menuIcon = document.querySelector(".menu-icono");

document.addEventListener("click", function(event) {
  if (menuCheckbox.checked && !event.target.closest(".menu")) {
    menuCheckbox.checked = false;
  }
});

menuIcon.addEventListener("click", function(event) {
  event.stopPropagation();
});
