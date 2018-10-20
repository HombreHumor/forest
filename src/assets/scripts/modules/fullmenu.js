export default () => {
  const menuBtn = document.querySelector('.hamburger-btn');
  const menuWrapper = document.querySelector('.menu');
  const header = document.querySelector('.main-header__top');

  menuBtn.addEventListener('click', event => {
    menuBtn.classList.toggle('hamburger-btn--active');
    menuWrapper.classList.toggle('menu--show');
  });
}