const resizeSlider = () => {
  if (window.innerWidth <= 768) {
    if (!document.querySelector('.slider__right-buttons--resize')) {
      let sliderButtonsBlock = document.querySelector('.slider__right-buttons');
      const slider = document.querySelector('.slider');
      let changeSliderButtonsBlock = sliderButtonsBlock;

      changeSliderButtonsBlock.classList.add('slider__right-buttons--resize');
      sliderButtonsBlock.remove();
      slider.insertBefore(changeSliderButtonsBlock, slider.children[0]);
    }
  } else {
    if (document.querySelector('.slider__right-buttons--resize')) {
      let changeSliderButtonsBlock = document.querySelector('.slider__right-buttons--resize');
      let sliderButtonsBlock = changeSliderButtonsBlock;
      const sliderRightBlock = document.querySelector('.slider__right');

      sliderButtonsBlock.classList.remove('slider__right-buttons--resize');
      sliderRightBlock.appendChild(sliderButtonsBlock);
    }
  }
}



export default () => {
  
  resizeSlider();

  window.addEventListener('resize', () => {
    resizeSlider();
  });

}