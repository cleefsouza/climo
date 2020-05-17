const key = 'ADD_KEY_API';
const format = 'json-cors';
const urlBase = 'https://api.hgbrasil.com/weather?';

$('.search').keypress((e) => {
    if (e.which === 13) {
        let cityName = $('#cityName').val();

        axios.get(`${urlBase}key=${key}&format=${format}&city_name=${cityName}`)
            .then((response) => {
                console.log(response.data.results)
            })
            .catch((error) => {
                console.warn(error)
            })
        }
    }
);