'use strict';

const date = new Date();

const day = date.getDay();
const hours = date.getHours();
const mins = date.getMinutes();

export default {
  fullTime: `${hours}:${mins}`,
  day,
};
