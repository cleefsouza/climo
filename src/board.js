/* eslint-disable no-undef */
import HTMLElements from './utils/nodeElements.js';
import ObjectDay from './utils/dateManagement.js';
import {
  baseRules,
  changeBackground,
  dataStorage,
  dayList,
} from './utils/services.js';

async function LoadContent() {
  const { mainContent, dinamicPanel } = HTMLElements;
  const { day, fullTime } = ObjectDay;

  const { uri, key, format, fields } = baseRules;
  const { city } = dataStorage;

  const response = await fetch(
    `${uri}&key=${key}&city_name=${city}&format=${format}&fields${fields}`
  );
  const data = await response.json();

  const { forecast } = data;
  const days = forecast.slice(1, 8);

  const HTMLTBoardTemplate = `
    <section class="cl-city">
      <div class="city-info">
        <span class="city-name">${data.city}</span>
        <span class="city-date">${data.date}</span>
      </div>

      <div class="city-verification">
        <i class="material-icons">schedule</i>
        <span>Última verificação: 1 min atrás</span>
      </div>
    </section>

    <section class="cl-condition">
      <div class="condition-temp">
        <i class="material-icons">wb_sunny</i>
        <h1>${data.temp}º</h1>
      </div>

      <div class="condition-description">
        <span>${fullTime}</span>
        <h2>${dayList[day]}</h2>
        <small>${data.description}</small>
      </div>
    </section>

    <section class="cl-day-week">
     ${days.map(
       data => `
        <div class="day-week">
          <span>${data.weekday}</span>
          <small>${data.max}º</small>
        </div>`
     )}
    </section>`;

  mainContent.innerHTML += HTMLTBoardTemplate;

  changeBackground(dinamicPanel, data.temp);
}

window.addEventListener('load', LoadContent());
