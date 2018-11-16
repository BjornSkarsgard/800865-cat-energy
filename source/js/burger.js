var btn = document.querySelector(".main-nav__btn-menu");
var menu = document.querySelector(".main-nav__items");
var close = document.querySelector (".main-nav__btn-indicator");

document.documentElement.classList.remove("no-js");
console.log("test");

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("menu-open");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  close.classList.toggle("main-nav__btn-indicator--close");
});
