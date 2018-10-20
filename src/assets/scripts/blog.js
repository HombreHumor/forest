import scrollBy from './modules/scrollBy';
import preloader from "./modules/preloader";
import fullmenu from './modules/fullmenu';

fullmenu();
preloader();

const articles = document.querySelectorAll('.blog__article');
const blogMenu = document.querySelector('.blog__nav-list');
const blog = document.querySelector('.blog__texts');
const blogMenuBtns = document.querySelectorAll('.blog__nav-btn');

window.addEventListener('scroll', () => {
  stickyNav();
  articles.forEach(element => {
    findActiveLink(element)
  });
})

blogMenuBtns.forEach(element => {
  scrollToArticle(element);
})

function scrollToArticle(element) {
  element.addEventListener('click', event => {
    const scrollTarget = document.getElementById(event.target.dataset.scrollto);
    let scrollYCoord = scrollTarget.getBoundingClientRect().top;
    scrollBy(scrollYCoord, 1000);
  });
}

function findActiveLink(element) {
  if (element.getBoundingClientRect().top <= 150) {
    const targetLink = document.querySelector(`[data-scrollto='${element.id}']`);
    setActiveLink(targetLink);
  } 
}

function setActiveLink(targetBtn) {
  blogMenuBtns.forEach(element => {
    if (element == targetBtn) {
      element.classList.add('js-blog-open-btn');
    } else {
      element.classList.remove('js-blog-open-btn');
    }
  });
}

function stickyNav() {
  if (blog.getBoundingClientRect().top <= 0) {
    blogMenu.classList.add('blog__nav-list--scroll');
  } else {
    blogMenu.classList.remove('blog__nav-list--scroll');
  }
}