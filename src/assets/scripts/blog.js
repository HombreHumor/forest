

// const articles = document.querySelectorAll('.blog__article');
const blogMenu = document.querySelector('.blog__nav-list');
// const blogMenuBtns = document.querySelectorAll('.blog__nav-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > blogMenu.offsetHeight) {
    blogMenu.classList.add('blog__nav-list--scroll');
  } else {
    blogMenu.classList.remove('blog__nav-list--scroll');
  }
})