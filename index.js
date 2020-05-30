const key = '74c640af';
const format = 'json-cors';
const urlBase = 'https://api.hgbrasil.com/weather?';
const fields =
  'array_limit=8&fields=only_results,city,description,date,temp,forecast,weekday,max';

const days = {
  Dom: 'Domingo',
  Seg: 'Segunda',
  Ter: 'Terça',
  Qua: 'Quarta',
  Qui: 'Quinta',
  Sex: 'Sexta',
  Sáb: 'Sábado',
};

const getUrlParams = url => new URLSearchParams(url).get('search');

const replaceDate = date => {
  return date.replace('/', '.').replace('/', '.');
};

const currentTime = () => {
  return new Date().toLocaleString().split(' ')[1].slice(0, -3);
};

async function getForCity() {
  const cityName = await getUrlParams(window.location.search);

  await axios
    .get(
      `${urlBase}key=${key}&format=${format}&${fields}&city_name=${cityName}`
    )
    .then(response => {
      showInfo(response.data);
    })
    .catch(error => {
      console.warn(error);
    });
}

function showInfo(json) {
  const { weekday } = json.forecast.find(
    item => item.date === json.date.slice(0, 5)
  );

  json.weekday = weekday;
  json.forecast.shift();

  setToday(json);
  renderElementsWeekdays(json.forecast);
}

function setToday(json) {
  $('.city-name').text(json.city);
  $('.city-date').text(replaceDate(json.date));
  $('#temp').text(`${json.temp}º`);
  $('#hour').text(currentTime());
  $('#today').text(days[json.weekday]);
  $('#description').text(json.description);
}

function renderElementsWeekdays(items) {
  let sectionDayWeek = document.querySelector('.cl-day-week');

  items.forEach(item => {
    sectionDayWeek.appendChild(createElement(item.weekday, item.max));
  });
}

const createElement = (day, temp) => {
  let divDayWeek = document.createElement('div');
  let spanDay = document.createElement('span');
  let smallTemp = document.createElement('small');

  divDayWeek.classList.add('day-week');
  spanDay.innerText = day;
  smallTemp.innerText = `${temp}º`;

  divDayWeek.appendChild(spanDay);
  divDayWeek.appendChild(smallTemp);

  return divDayWeek;
};

getForCity();
