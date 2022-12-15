import '../css/style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

loadHome();

const homeBtn = document.querySelector('.home-tab'),
      menuBtn = document.querySelector('.menu-tab'),
      contactBtn = document.querySelector('.contact-tab');

homeBtn.addEventListener('click', () => {
  clear();
  loadHome();
})

menuBtn.addEventListener('click', () => {
  clear();
  loadMenu();
})

contactBtn.addEventListener('click', () => {
  clear();
  loadContact();
})

const clear = () => {
  let currentPage = document.querySelector('.container');
  currentPage.remove();
};
