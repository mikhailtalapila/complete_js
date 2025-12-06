'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// document.documentElement.style.setProperty('--color-primary', 'green');
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
//
// logo.alt = 'hello';
// console.log(logo.alt);
// logo.setAttribute('company', 'test company');
// console.log(logo.getAttribute('designer'));
// console.log(logo.getAttribute('company'));
//
// console.log(logo.getAttribute('src'));
//
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));
//
// //data attributes
// console.log(logo.dataset.versionNumber);
//
// //classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
//
// //don't use - will override
// logo.className = 'jonas';
//
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('current scroll', window.pageXOffset, window.pageYOffset);

  console.log(document.documentElement.clientHeight);

  //scrolling

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // section1.scrollIntoView({ behavior: 'smooth' });
});

//const h1 = document.querySelector('h1');
//const alerth1 = function (e) {
//  alert('reading title');
//  h1.removeEventListener('mouseenter', alerth1);
//};

//h1.addEventListener('mouseenter', alerth1);
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the Heading');
// };
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, 
  ${randomInt(0, 255)},${randomInt(0, 255)}
)`;
console.log(randomColor());
document.querySelector('.nav__link').addEventListener('click', function (e) {});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
