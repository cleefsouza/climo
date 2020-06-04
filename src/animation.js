import HTMLElements from './utils/nodeElements.js';

function fixedOnScroll() {
  window.addEventListener('scroll', () => {
    const { herosectionContent, heroformFixed } = HTMLElements;

    const sectionHeight = herosectionContent.offsetHeight;

    let pageScrollValue = window.pageYOffset;
    let enableAnimation = Math.floor((pageScrollValue / sectionHeight) * 10);

    enableAnimation >= 9.4
      ? heroformFixed.classList.add('show')
      : heroformFixed.classList.remove('show');
  });
}

export { fixedOnScroll };
