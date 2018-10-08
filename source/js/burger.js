var btn = document.querySelector(".main-nav__btn-menu");
var menu = document.querySelector(".main-nav__items");
var close = document.querySelector (".main-nav__btn-indicator");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("menu-open");
});

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  close.classList.toggle("main-nav__btn-indicator--close");
});

// var navMain = document.querySelector('.main-nav__items');
// var navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });
