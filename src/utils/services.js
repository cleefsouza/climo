/* eslint-disable no-undef */
const baseRules = {
  key: '8fb4981a', // HG_KEY Genérica
  format: 'json-cors',
  uri: 'https://api.hgbrasil.com/weather?',
  fields:
    'array_limit=8&fields=only_results,city,description,date,temp,forecast,weekday,max',
};

const dataStorage = {
  city: localStorage.getItem('city'),
};

const climateCondition = {
  props: 'no-repeat center center / cover',
  spring: '../assets/images/spring-day.jpg',
  sunset: '../assets/images/sunset-day.jpg',
  winter: '../assets/images/winter-day.jpg',
};

const dayList = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

const randomCities = ['Rio Branco', 'São Paulo', 'Bluemenau', 'Fortaleza'];

function changeBackground(HTMLElement, temp) {
  const { props, spring, sunset, winter } = climateCondition;

  if (temp <= 0 || temp < 13.5) {
    HTMLElement.style.background = `url(${winter}) ${props}`;
  } else if (temp > 13.6 && temp < 25.5) {
    HTMLElement.style.background = `url(${spring}) ${props}`;
  } else {
    HTMLElement.style.background = `url(${sunset}) ${props}`;
  }
}

export { baseRules, changeBackground, dataStorage, dayList, randomCities };
