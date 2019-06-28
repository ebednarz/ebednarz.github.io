'use strict';
const { readFileSync, writeFileSync } = require('fs');
const { process } = require('postcss-preset-env');

const from = './style/app.css';
const to = './docs/app.css';

process(readFileSync(from), { from })
  .then(styleSheet =>
    writeFileSync(to, styleSheet, 'utf8'));
