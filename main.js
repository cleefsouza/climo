'use strict';

import HTMLElements from './src/utils/nodeElements.js';
import animatedOnScroll from './src/animation.js';

function ContentLoad() {
  const { inputElement } = HTMLElements;

  for (let input of inputElement) {
    input.addEventListener('keypress', e => {
      if (e.keyCode == 13) {
        const cityName = input.value;
        localStorage.setItem('city', cityName);
      }
    });
  }

  animatedOnScroll();
}

window.addEventListener('load', ContentLoad());
