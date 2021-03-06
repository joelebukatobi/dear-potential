let menuButton = document.querySelector(".navbar__mobile__menu");
let navItems = document.querySelector(".navbar__nav");
let header = document.querySelector(".navbar");
let barHide = document.querySelector(".navbar__mobile__menu__bar:nth-child(1)");
let barLeft = document.querySelector(".navbar__mobile__menu__bar:nth-child(2)");
let barRight = document.querySelector(
  ".navbar__mobile__menu__bar:nth-child(3)"
);

menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle("navbar__nav__toggle");
  barHide.classList.toggle("navbar__mobile__menu__bar__hide");
  barLeft.classList.toggle("navbar__mobile__menu__bar__cross");
  barRight.classList.toggle("navbar__mobile__menu__bar__across");

  let bar = document.querySelector(".navbar__mobile__menu__bar");
  let btn = document.querySelector(".navbar__nav__btn");
  let nav = document.querySelector(".navbar__nav__toggle");

  if (nav) {
    header.style.height = "100vh";
    header.style.overflow = "hidden";
    header.style.backgroundColor = "#ffffff";
    barLeft.style.backgroundColor = "#dd792f";
    barRight.style.backgroundColor = "#dd792f";
    btn.style.display = "inline";
  } else {
    header.style.height = "auto";
    barLeft.style.backgroundColor = "#ffffff";
    barRight.style.backgroundColor = "#ffffff";
    btn.style.display = "none";
    header.style.backgroundColor = "transparent";
  }
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 32,
  dotsEach: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 8000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

$('[data-fancybox="gallery"]').fancybox({
  slideShow: {
    autoStart: true,
    speed: 5000,
  },
});
