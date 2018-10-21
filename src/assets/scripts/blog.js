import scrollBy from './modules/scrollBy';
import preloader from "./modules/preloader";
import fullmenu from './modules/fullmenu';

fullmenu();
preloader();

const articles = document.querySelectorAll('.blog__article');
const blogMenu = document.querySelector('.blog__nav-list');
const blog = document.querySelector('.blog__texts');
const blogMenuBtns = document.querySelectorAll('.blog__nav-btn');
const blogMenuSwipeBtns = document.querySelectorAll('.blog-swipe__nav-btn');
const openSwipeBtn = document.querySelector('.blog-swipe__open-btn');
const swipeMenu = document.querySelector('.blog-swipe');

window.addEventListener('scroll', () => {
  stickyNav();
  articles.forEach(element => {
    findActiveLink(element)
  });
})

blogMenuBtns.forEach(element => {
  scrollToArticle(element);
})

blogMenuSwipeBtns.forEach(element => {
  scrollToArticle(element);
});

openSwipeBtn.addEventListener('click', () => {
  swipeMenu.classList.toggle('blog-swipe--active');
});

function scrollToArticle(element) {
  element.addEventListener('click', event => {
    if (document.querySelector('.blog-swipe--active')) {
      swipeMenu.classList.remove('blog-swipe--active');
    }
    const scrollTarget = document.getElementById(event.target.dataset.scrollto);
    let scrollYCoord = scrollTarget.getBoundingClientRect().top;
    scrollBy(scrollYCoord, 1000);
  });
}

function findActiveLink(element) {
  if (element.getBoundingClientRect().top <= 150) {
    const targetLinks = document.querySelectorAll(`[data-scrollto='${element.id}']`);
    targetLinks.forEach(btn => {
      setActiveLink(btn);
    });
  } 
}

function setActiveLink(targetBtn) {
  if (targetBtn.dataset.type) {
    blogMenuSwipeBtns.forEach(element => {
      if (element === targetBtn) {
        element.classList.add('blog-swipe__nav-btn--active');
      } else {
        element.classList.remove('blog-swipe__nav-btn--active');
      }
    });
  } else {
    blogMenuBtns.forEach(element => {
      if (element == targetBtn) {
        element.classList.add('js-blog-open-btn');
      } else {
        element.classList.remove('js-blog-open-btn');
      }
    });
  }
  
}

function stickyNav() {
  if (blog.getBoundingClientRect().top <= 0) {
    blogMenu.classList.add('blog__nav-list--scroll');
  } else {
    blogMenu.classList.remove('blog__nav-list--scroll');
  }
}