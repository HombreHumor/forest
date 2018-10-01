const welcomeContainer = document.querySelector('.welcome__container');
const authContainer = document.querySelector('.auth__container');
const authBtn = document.querySelector('.auth-btn');
const backToMainBtn = document.querySelector('.js-back-to-main');

const toggleFace = () => {
  welcomeContainer.classList.toggle('js-toogle-face');
  authContainer.classList.toggle('js-toogle-face');
}

export default () => {
  authBtn.addEventListener('click', () => {
    toggleFace();
    authBtn.style.display = 'none';
  });
  backToMainBtn.addEventListener('click', () => {
    toggleFace();
    authBtn.style.display = 'block';
  });

  if (window.location.href.indexOf('auth') + 1) {
    toggleFace();
    authBtn.style.display = 'none';
  }
}