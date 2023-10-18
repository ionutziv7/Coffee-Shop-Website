const searchIcon = document.querySelector("#search-icon");
const shoppingIcon = document.querySelector("#shopping-icon");
const menuIcon = document.querySelector("#menu-icon");
const searchBox = document.querySelector(".search-box");
const navbar = document.querySelector(".header .navbar");
const shoppingCart = document.querySelector(".shopping-cart-container");
const toTop = document.querySelector("#to-top");
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header .navbar a");
const removeItem = document.querySelectorAll(".remove-item");
const addCartBtn = document.querySelectorAll(".add-cart");

// Cart Open Close
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

searchIcon.onclick = () => {
  searchBox.classList.toggle("active");
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
};

menuIcon.onclick = () => {
  // menuIcon.classList.toggle('fa-times');
  navbar.classList.toggle("active");
  searchBox.classList.remove("active");
  shoppingCart.classList.remove("active");
};

shoppingIcon.onclick = () => {
  shoppingCart.classList.toggle("active");
  navbar.classList.remove("active");
  searchBox.classList.remove("active");
};

addCartBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let menuItem = document.createElement("div");
    menuItem.classList.add("cart-item");

    menuItem.innerHTML = `
      <img src="images/cart-2.png" alt="cart item" />
      <input type="number" name="quantity" id="quantity" class="quantity" min="0" value="0">
      <span class="price">$25.99</span>
      <div class="remove-item fas fa-times"></div>
    `;

    shoppingCart.appendChild(menuItem);
  });
});

removeItem.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clikded");
    item.parentElement.remove();
  });
});

window.onscroll = () => {
  // menuIcon.classList.remove("fa-times");
  navbar.classList.remove("active");
  searchBox.classList.remove("active");
  toTop.classList.toggle("active", window.scrollY > 300);

  // links active
  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
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
