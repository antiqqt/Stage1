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

/*
 ** WEEK 3
 */

// Elements
const sideBar = document.querySelector('.nav--sidebar');
const burgerBtn = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav__link');
const overlay = document.querySelector('.overlay');
const headerLogo = document.querySelector('.header__logo');
const body = document.querySelector('.body');

// Listeners
burgerBtn.addEventListener('click', toggleSidebar);
burgerBtn.addEventListener('click', toggleBurger);
burgerBtn.addEventListener('click', toggleHeaderLogo);
burgerBtn.addEventListener('click', toggleOverlay);
burgerBtn.addEventListener('click', toggleScrollOnBody);


navLinks.forEach((elem) => {
  elem.addEventListener('click', closeSidebar);
  elem.addEventListener('click', closeBurger);
  elem.addEventListener('click', toggleHeaderLogo);
  elem.addEventListener('click', closeOverlay);
  elem.addEventListener('click', toggleScrollOnBody);
});


overlay.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeBurger);
overlay.addEventListener('click', toggleHeaderLogo);
overlay.addEventListener('click', closeOverlay);
overlay.addEventListener('click', toggleScrollOnBody);

// Sidebar menu
function toggleSidebar() {
  sideBar.classList.toggle('nav--sidebar--active');
}

function closeSidebar() {
  sideBar.classList.remove('nav--sidebar--active');
}

// Burger button
function toggleBurger() {
  burgerBtn.classList.toggle('burger--active');
}

function closeBurger() {
  burgerBtn.classList.remove('burger--active');
}

// Overlay blackout
function toggleOverlay() {
  overlay.classList.toggle('overlay--active');
}

function closeOverlay() {
  overlay.classList.remove('overlay--active');
}

// Logos
function toggleHeaderLogo() {
  headerLogo.classList.toggle('logo--hidden');
}

function closeHeaderLogo() {
  headerLogo.classList.remove('header__logo--hidden');
}

// Overlay blackout
function toggleOverlay() {
  overlay.classList.toggle('overlay--active');
}

function closeOverlay() {
  overlay.classList.remove('overlay--active');
}

// Scroll
function toggleScrollOnBody() {
  body.classList.toggle('body--scroll-disabled')
}
