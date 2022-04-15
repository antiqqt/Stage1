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
  console.log('aba')
}

function toggleBurger() {
  const burger = document.querySelector('.burger');
  burger.classList.toggle('burger--active');
}

const burger = document.querySelector('.burger');

burger.addEventListener('click', toggleSidebar);
burger.addEventListener('click', toggleBurger);
// Autocheck
