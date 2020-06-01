'use strict';

export default {
  uri: 'https://api.hgbrasil.com/weather?',
  key: 'e089fbb0',
  fields:
    'array_limit=8&fields=only_results,city,description,date,temp,forecast,weekday,max',
  format: 'json-cors',
};
