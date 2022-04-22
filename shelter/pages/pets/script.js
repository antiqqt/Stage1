/*
 ** WEEK 3
 */

// SIDEBAR

// Elements
const sideBar = document.querySelector('.nav--sidebar');
const burgerBtn = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav__link');
const sidebarOverlay = document.querySelector('.overlay--sidebar');
const headerLogo = document.querySelector('.header__logo');
const body = document.querySelector('.body');
const header = document.querySelector('.header');

// Listeners
burgerBtn.addEventListener('click', toggleSidebar);
burgerBtn.addEventListener('click', toggleBurger);
burgerBtn.addEventListener('click', toggleHeaderLogo);
burgerBtn.addEventListener('click', toggleSidebarOverlay);
burgerBtn.addEventListener('click', toggleScrollOnBody);
burgerBtn.addEventListener('click', toggleHeaderPosition);

navLinks.forEach((elem) => {
  elem.addEventListener('click', closeSidebar);
  elem.addEventListener('click', closeBurger);
  elem.addEventListener('click', displayHeaderLogo);
  elem.addEventListener('click', closeSidebarOverlay);
  elem.addEventListener('click', enableScrollOnBody);
  elem.addEventListener('click', fixHeaderPosition);
});

sidebarOverlay.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeBurger);
sidebarOverlay.addEventListener('click', displayHeaderLogo);
sidebarOverlay.addEventListener('click', closeSidebarOverlay);
sidebarOverlay.addEventListener('click', enableScrollOnBody);
sidebarOverlay.addEventListener('click', toggleHeaderPosition);

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
  sidebarOverlay.classList.toggle('overlay--active');
}

function closeOverlay() {
  sidebarOverlay.classList.remove('overlay--active');
}

// Logos
function toggleHeaderLogo() {
  headerLogo.classList.toggle('logo--hidden');
}

function displayHeaderLogo() {
  headerLogo.classList.remove('logo--hidden');
}

// Sidebar overlay blackout
function toggleSidebarOverlay() {
  sidebarOverlay.classList.toggle('overlay--active');
}

function closeSidebarOverlay() {
  sidebarOverlay.classList.remove('overlay--active');
}

// Scroll
function toggleScrollOnBody() {
  body.classList.toggle('body--scroll-disabled')
}

function enableScrollOnBody() {
  body.classList.remove('body--scroll-disabled')
}

// Header on pets page
function toggleHeaderPosition() {
  header.classList.toggle('header--active');
}

function fixHeaderPosition() {
  header.classList.remove('header--active');
}