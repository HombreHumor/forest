const works = require('../../data/works.json');
const mainSlide = document.querySelector('.js-main-slide');
const sliderTitle = document.querySelector('.js-slider-title');
const sliderUsed = document.querySelector('.js-slider-used');
const sliderCiteBtn = document.querySelector('.js-slider-cite-btn');
const prevSlide = document.querySelector('.js-slider-prev');
const prevSlideImg = prevSlide.querySelector('img');
const nextSlide = document.querySelector('.js-slider-next');
const nextSlideImg = nextSlide.querySelector('img');
const sliderLength = works.length;
let currentSlide = 0;

function slideLimiter(value) {
  if (value >= sliderLength) {
    return 0;
  } else if (value < 0) {
    return sliderLength - 1;
  } else {
    return value;
  }
}

function fillSlider() {
  let prev = slideLimiter(currentSlide - 1);
  let next = slideLimiter(currentSlide + 1);

  mainSlide.src = works[currentSlide].image;
  prevSlideImg.src = works[prev].image;
  nextSlideImg.src = works[next].image;
  sliderTitle.innerText = works[currentSlide].title;
  sliderUsed.innerText = works[currentSlide].used.join(', ');
  sliderCiteBtn.href = works[currentSlide].link;
}

export default () => {

  prevSlide.addEventListener('click', () => {
    currentSlide = slideLimiter(currentSlide -1);
    fillSlider();
  })

  nextSlide.addEventListener('click', () => {
    currentSlide = slideLimiter(currentSlide + 1);
    fillSlider();
  })

}