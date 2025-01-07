const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  menu.classList.toggle("active"); // Toggler menuens synlighed
  burger.classList.toggle("active"); // Tilføjer animation eller styling til burger-ikonet
}
