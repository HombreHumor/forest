import slider from "./modules/slider";
import resizeSlider from "./modules/resizeSlider";
import preloader from "./modules/preloader";

preloader();
slider();
resizeSlider();


let blur = (function () {
  let wrapper = document.querySelector('.js-feedback'),
    form = document.querySelector('.abouts__bg ');

  return {
    set: function () {
      let imgTop = document.querySelector('.js-blur').offsetTop;
      let wrapperTop = document.querySelector('.abouts__form').clientY;
      let trY = imgTop - wrapperTop;
      console.log(imgTop, wrapperTop);
      form.style.transform = `translateY(-${trY}px)`;
      // let imgWidth = document.querySelector('.js-blur').offsetWidth,
      //   imgHeight = document.querySelector('.js-blur').offsetHeight,
      //   posLeft = -wrapper.offsetLeft,
      //   posTop = -wrapper.offsetTop,
      //   blurCSS = form.style;
      //   blurCSS.transform = `translateX(${posLeft})`;
      // blurCSS.width = `${imgWidth}px`;
      // blurCSS.height = `${imgHeight}px`;
      // blurCSS.transform = `translate(${posLeft}px,${posTop}px)`;
    },
  };
}());

blur.set();

window.onresize = function () {
  blur.set();
};
