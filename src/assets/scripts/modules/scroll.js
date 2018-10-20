export default () => {
  const downBtn = document.querySelector('.down-btn');
  const upBtn = document.querySelector('.up-btn');
  const top = document.querySelector('.maincontent').offsetTop;
  const bottom = document.querySelector('.footer').offsetTop;

  downBtn.addEventListener('click', () => {
    window.scrollTo({
      top: bottom,
      behavior: "smooth"
    })
  })

  upBtn.addEventListener('click', () => {
    window.scrollTo({
      top: top,
      behavior: "smooth"
    })
  })
}