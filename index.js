/* eslint-disable no-undef */
import HTMLElements from './src/utils/nodeElements.js';
import ObjectDay from './src/utils/dateManagement.js';
import { fixedOnScroll } from './src/animation.js';
import {
  baseRules,
  dataStorage,
  dayList,
  randomCities,
} from './src/utils/services.js';

function contentLoadAPI() {
  const { inputElement, cardsectionContent } = HTMLElements;
  const { key, uri, fields, format } = baseRules;
  const { city } = dataStorage;
  const { day } = ObjectDay;

  for (let input of inputElement) {
    input.addEventListener('keypress', async e => {
      if (e.keyCode == 13) {
        const nodeInputValue = input.value;
        localStorage.setItem('city', nodeInputValue);

        !city || city == null
          ? alert('Não foi possível realizar sua pesquisa. Tente novamente')
          : dataStorage;
      }
    });
  }

  randomCities.map(async cityParam => {
    const baseURI = `
      ${uri}&key=${key}&city_name=${cityParam}&format=${format}&fields${fields}`;

    const response = await fetch(baseURI);
    const data = await response.json();

    const cardTemplate = `
      <article class="card">
        <div class="card-info">
          <div class="climate-info">
            <div class="detail-info">
              <strong>${data.city}</strong>
              <span>${dayList[day]}-feira</span>
              <small>${data.description}</small>
            </div>

            <div class="climate-icon">
              <i class="material-icons">wb_sunny</i>
            </div>
          </div>
          <div class="climate-temp">
            <strong>${data.temp}ºC</strong>
          </div>
        </div>
      </article>`;

    cardsectionContent.innerHTML += cardTemplate;
  });

  fixedOnScroll();
}

window.addEventListener('load', contentLoadAPI());
