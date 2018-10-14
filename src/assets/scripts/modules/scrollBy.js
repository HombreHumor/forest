export default (distance, duration) => {
  let initialY = window.pageYOffset;
  let y = initialY + distance;
  let baseY = (initialY + y) * 0.5;
  let difference = initialY - baseY;
  let startTime = performance.now();

  function step() {
    let normalizedTime = (performance.now() - startTime) / duration;
    if (normalizedTime > 1) normalizedTime = 1;
    window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
    if (normalizedTime < 1) window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}