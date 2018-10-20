export default () => {
  const blur = (function () {
    const container = document.querySelector('.js-blur-wrapper');
    const formBlur = document.querySelector('.js-blur');

    return {
      set: function () {
        const bgWidth = document.querySelector('.js-abouts-bg').offsetWidth;
        const bgHeight = document.querySelector('.js-abouts-bg').offsetHeight;
        const posLeft = -container.offsetLeft;
        const posTop = -container.offsetTop;
        const blurCSS = formBlur.style;

        blurCSS.width = `${bgWidth}px`;
        blurCSS.height = `${bgHeight}px`;
        blurCSS.transform = `translate(${posLeft}px,${posTop}px`;
        blurCSS.webkitTransform = `translate(${posLeft}px,${posTop}px`;
      }
    }
  }());

  window.onresize = function () {
    blur.set();
  }
  window.onload = function () {
    blur.set();
  }
}