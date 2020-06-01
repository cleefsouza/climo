const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();
const day = date.getDay();
const daysWeek = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

export default {
  fullHour: `${hours}:${minutes}`,
  extensiveDate: daysWeek[day],
};
