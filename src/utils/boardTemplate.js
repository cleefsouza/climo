import HTMLElements from './nodeElements.js';
import DateControl from './dateControl.js';

const {
  boardCityInfo,
  boardConditionInfo,
  boardLogInfo,
  boardWeekDays,
} = HTMLElements;

const { fullHour, extensiveDate } = DateControl;

const renderInnerHTML = (parent, child) => {
  return (parent.innerHTML += child);
};

export default {
  climateInfoTemplate: (cityName, cityDate) => {
    const climateCityInfo = `
    <span class="city-name">${cityName}</span>
    <span class="city-date">${cityDate}</span>`;

    renderInnerHTML(boardCityInfo, climateCityInfo);
  },
  conditionInfoTemplate: tempInfo => {
    const conditionInfoTemplate = `
    <i class="material-icons">wb_sunny</i>
    <h1>${tempInfo}º</h1>`;

    renderInnerHTML(boardConditionInfo, conditionInfoTemplate);
  },
  conditionLogTemplate: logInfo => {
    const climateLogInfo = `
    <span>${fullHour}</span>
    <h2>${extensiveDate}</h2>
    <small>${logInfo}</small>`;

    renderInnerHTML(boardLogInfo, climateLogInfo);
  },
  conditionDaysWeek: days => {
    const forecastDays = days.map(
      data =>
        `<div class="day-week">
          <span>${data.weekday}</span>
          <small>${data.max}º</small>
         </div>
        `
    );

    const weekDays = forecastDays.slice(0, 7);

    renderInnerHTML(boardWeekDays, weekDays);
  },
};
