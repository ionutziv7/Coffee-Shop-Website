const searchIcon = document.querySelector("#search-icon");
const shoppingIcon = document.querySelector("#shopping-icon");
const menuIcon = document.querySelector("#menu-icon");
const searchBox = document.querySelector(".search-box");
const navbar = document.querySelector(".header .navbar");
const shoppingCart = document.querySelector(".shopping-cart-container");
const toTop = document.querySelector("#to-top");

searchIcon.onclick = () => {
  searchBox.classList.toggle("active");
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
};

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  searchBox.classList.remove("active");
  shoppingCart.classList.remove("active");
};

shoppingIcon.onclick = () => {
  shoppingCart.classList.toggle("active");
  navbar.classList.remove("active");
  searchBox.classList.remove("active");
};

window.onscroll = () => {
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
  searchBox.classList.remove("active");
  toTop.classList.toggle("active", window.scrollY > 300);
};

// Swiper
var swiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
