const searchIcon = document.querySelector("#search-icon");
const shoppingIcon = document.querySelector("#shopping-icon");
const menuIcon = document.querySelector("#menu-icon");
const searchBox = document.querySelector(".search-box");

searchIcon.onclick = () => {
  searchBox.classList.toggle('active');
};
