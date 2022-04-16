'use strict';

/*
 ** WEEK 1
 */
// Make button on 'Start screen' section
// lead to the 'Our friends' section
const sectionStartBtn = document.querySelector('.section--start__button');

sectionStartBtn.addEventListener('click', (e) => {
  window.location.replace('#our-friends');
});

// Make button on 'Our friends' section
// lead to the '/pets' page
const sectionFriendsBtn = document.querySelector('.section--friends__button');

sectionFriendsBtn.addEventListener('click', (e) => {
  console.log(location.href);
  window.location.assign('../pets');
});

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