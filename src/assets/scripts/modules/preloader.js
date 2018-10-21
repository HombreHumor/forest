export default () => {
  const preloader = (function () {
    const preloadImg = document.getElementsByTagName('*');
    const preloadBlock = document.querySelector('.js-preloader');
    const preloadText = document.querySelector('.js-preloader-text');
    const regImgUrl = /background-image: url\(['"]?(.*?)['"]?\)/i;
    const wrapper = document.querySelector('.js-preloader-wrapper');
    const imgArr = [];
    let progress = 0;
    let img;
    let allImg;
    let shadowImg;

    return {

      show: function () {
        wrapper.classList.add('wrapper-hidden');

        return new Promise((resolve) => {
          let i = 0;
          let interval = setInterval(()=> {
            i++;
            preloadText.innerText = `${i}%`;
            if (i === 100) {
              preloadText.innerText = `${i}%`;
              clearInterval(interval);
              resolve();
            }
          }, 10);
        }).then(function () {
          preloadBlock.style.display = 'none';
          wrapper.classList.remove('wrapper-hidden');
        });
      },
    };
  })();

  preloader.show();
}