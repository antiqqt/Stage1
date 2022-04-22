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

// POPUP WINDOW
import petsData from '../../assets/pets-data/pets-data.js';

const cardContainer = document.querySelector('.section--pets__gallery');
cardContainer.addEventListener('click', handlePopup);

const popupOverlay = document.querySelector('.overlay--popup');
popupOverlay.addEventListener('click', closePopupOverlay);
popupOverlay.addEventListener('click', enableScrollOnBody);
popupOverlay.addEventListener('click', removePopup);

let popup;

function handlePopup(event) {
  // Get card that was clicked on
  // and its id
  const card = event.target.closest('.card');
  if (!card) return;

  const cardId = Number(card.dataset.id);

  // Generate popup block
  popup = generatePopup(cardId);

  toggleScrollOnBody();
  togglePopupOverlay();
  openPopup();
}

function generatePopup(id) {
  // Get data from json
  const petData = petsData[id];

  // Create popup image
  const popupImage = generatePopupImage(petData);

  // Create popup content
  const popupContent = generatePopupContent(petData);

  // Create popup button
  const popupBtn = generatePopupBtn();

  // Create popup window
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.append(popupImage, popupContent, popupBtn);

  return popup;
}

function generatePopupImage(petData) {
  const img = document.createElement('img');

  img.classList.add('popup__img');
  img.src = petData.img;
  img.alt = petData.breed;

  return img;
}

function generatePopupContent(petData) {
  // Name
  const petName = document.createElement('p');
  petName.classList.add('heading');
  petName.classList.add('heading--h3');
  petName.classList.add('content__name');
  petName.innerText = petData.name;

  // Type
  const petType = document.createElement('p');
  petType.classList.add('heading');
  petType.classList.add('heading--h4');
  petType.classList.add('content__type');
  petType.innerText = `${petData.type} - ${petData.breed}`;

  // Description
  const petDescription = document.createElement('p');
  petDescription.classList.add('content__description');
  petDescription.innerText = petData.description;

  // Features
  const petFeatures = generatePetFeatures(petData);

  // Put together
  const content = document.createElement('div');
  content.classList.add('content');
  content.classList.add('popup__content');

  content.append(petName, petType, petDescription, petFeatures);

  return content;
}

function generatePetFeatures(petData) {
  const age = generatePetFeatureItem(petData, 'age');
  const inoculations = generatePetFeatureItem(petData, 'inoculations');
  const diseases = generatePetFeatureItem(petData, 'diseases');
  const parasites = generatePetFeatureItem(petData, 'parasites');



  // Put together
  const list = document.createElement('ul');
  list.classList.add('list');
  list.classList.add('content__list');

  list.append(age, inoculations, diseases, parasites);

  return list;
}

function generatePetFeatureItem(petData, attrName) {
  // Create heading
  const itemHeading = document.createElement('em');
  itemHeading.classList.add('heading');
  itemHeading.classList.add('heading--h5-modal-window');
  itemHeading.classList.add('list__key');
  itemHeading.innerText = `${attrName}:`;

  // Make sure information is joined with ', '
  // if it contains more than 1 word;
  let itemData = petData[attrName];
  if (Array.isArray(itemData) && itemData.length > 0) {
    itemData = itemData.join(', ');
  }

  // Create item
  const item = document.createElement('li');
  item.classList.add('list__item');
  item.innerText = ' ' + itemData;
  item.prepend(itemHeading);

  return item;
}

function generatePopupBtn() {
  const popupBtnCross = document.createElement('div');
  popupBtnCross.classList.add('popup__cross');

  const popupBtn = document.createElement('button');
  popupBtn.classList.add('button');
  popupBtn.classList.add('popup__button');
  popupBtn.append(popupBtnCross);

  popupBtn.addEventListener('click', removePopup);
  popupBtn.addEventListener('click', closePopupOverlay);
  popupBtn.addEventListener('click', enableScrollOnBody);

  return popupBtn;
}

function togglePopupOverlay() {
  popupOverlay.classList.toggle('overlay--active');
}

function closePopupOverlay() {
  popupOverlay.classList.remove('overlay--active');
}

function openPopup() {
  body.append(popup);
}

function removePopup() {
  document.querySelector('.popup').remove();
}