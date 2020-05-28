const key = '74c640af';
const format = 'json-cors';
const urlBase = 'https://api.hgbrasil.com/weather?';

const getForCity = () => {
  $('#form-search').submit(e => e.preventDefault());

  $('#search').keypress(e => {
    if (e.which === 13) {
      let cityName = $('#search').val();

      axios
        .get(`${urlBase}key=${key}&format=${format}&city_name=${cityName}`)
        .then(response => {
          console.log(response.data.results);
        })
        .catch(error => {
          console.warn(error);
        });
    }
  });
};

const start = () => {
  getForCity();
};

window.addEventListener('load', start);
