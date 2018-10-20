export default () => {
  const menuBtn = document.querySelector('.hamburger-btn');
  const menuWrapper = document.querySelector('.menu');
  const body = document.querySelector('body');

  menuBtn.addEventListener('click', event => {
    menuBtn.classList.toggle('hamburger-btn--active');
    menuWrapper.classList.toggle('menu--show');
    body.classList.toggle('noscroll');
  });
}