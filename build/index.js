'use strict';
const { writeFileSync } = require('fs');
const render = require('./markup');
const homepage = require('../html/home');
const { get } = require('./api');

get('/api').then(({ distance, weight }) => {
  writeFileSync('./docs/index.html', render(homepage({
    title: 'Die fetten Jahre sind vorbei',
    caption: 'since july 2013',
    distance,
    weight,
  })), 'utf-8');
});
