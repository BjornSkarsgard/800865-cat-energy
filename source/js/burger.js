var btn = document.querySelector(".main-nav__btn-menu");
var menu = document.querySelector(".main-nav__items");


btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("menu-open");
});
