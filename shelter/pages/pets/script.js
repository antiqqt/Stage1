// Sidebar menu
function toggleSidebar() {
  const sideBar = document.querySelector('.nav--sidebar');
  sideBar.classList.toggle('nav--sidebar--active');
}

function closeSidebar() {
  const sideBar = document.querySelector('.nav--sidebar');
  sideBar.classList.remove('nav--sidebar--active');
}

// Burger button
const burger = document.querySelector('.burger');

burger.addEventListener('click', toggleSidebar);
burger.addEventListener('click', toggleBurger);

function toggleBurger() {
  const burger = document.querySelector('.burger');
  burger.classList.toggle('burger--active');
}

function closeBurger() {
  const burger = document.querySelector('.burger');
  burger.classList.remove('burger--active');
}

// Links in navbar
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((elem) => {
  elem.addEventListener('click', closeSidebar);
  elem.addEventListener('click', closeBurger);
});