'use strict';

import HTMElements from './src/utils/nodeElements.js';
import HTMLTemplate from './src/utils/boardTemplate.js';
import baseRules from './src/utils/service.js';

async function LoadRequest() {
  const cityStorage = localStorage.getItem('city');
  const { uri, key, fields, format } = baseRules;
  const { dinamicPanel } = HTMElements;

  const {
    climateInfoTemplate,
    conditionInfoTemplate,
    conditionLogTemplate,
    conditionDaysWeek,
  } = HTMLTemplate;

  const response = await fetch(
    `${uri}&key=${key}&city_name=${cityStorage}&format=${format}&fields${fields}`
  );

  const data = await response.json();
  const { city, date, temp, description, forecast } = data;

  climateInfoTemplate(city, date);
  conditionInfoTemplate(temp);
  conditionLogTemplate(description);
  conditionDaysWeek(forecast);
}

window.addEventListener('load', LoadRequest());
