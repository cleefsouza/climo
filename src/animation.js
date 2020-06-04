import HTMLElements from './utils/nodeElements.js';

function animatedEffects() {
  const {
    herosectionContent,
    heroformFixed,
    contributorsContent,
  } = HTMLElements;

  let dragging = false;
  let startX;
  let scrollX;

  window.addEventListener('scroll', () => {
    const sectionHeight = herosectionContent.offsetHeight;

    let pageScrollValue = window.pageYOffset;
    let enableAnimation = Math.floor((pageScrollValue / sectionHeight) * 10);

    enableAnimation >= 9.4
      ? heroformFixed.classList.add('show')
      : heroformFixed.classList.remove('show');
  });

  contributorsContent.addEventListener('mousedown', e => {
    dragging = true;

    startX = e.pageX - contributorsContent.offsetLeft;

    scrollX = contributorsContent.scrollLeft;

    console.log(startX);
  });

  contributorsContent.addEventListener('mouseleave', () => (dragging = false));

  contributorsContent.addEventListener('mouseup', () => (dragging = false));

  contributorsContent.addEventListener('mousemove', e => {
    e.preventDefault();

    if (!dragging) return;

    const x = e.pageX - contributorsContent.offsetLeft;
    const animated = (x - startX) * 1;

    contributorsContent.scrollLeft = scrollX - animated;
  });
}

export { animatedEffects };
