'use strict';
const es6pack = require('es6pack');

module.exports = ({
  title,
  caption,
  distance,
  weight,
}) => [
  ['html', {
    lang: 'en',
  }, [
    ['head', [
      ['title', {
        lang: 'de',
      }, title],
      ['link', {
        rel: 'stylesheet',
        href: '/assets/style/app.css',
      }],
      ['script', es6pack],
    ]],
    ['body', [
      ['table', [
        ['caption', caption],
        ['tbody', [
          ['tr', [
            ['td', [
              ['small', '+'],
              distance,
            ]],
            ['td', [
              ['small', 'km'],
            ]],
          ]],
          ['tr', [
            ['td', [
              ['small', '−'],
              weight,
            ]],
            ['td', [
              ['small', 'kg'],
            ]],
          ]],
        ]],
      ]],
    ]],
  ]],
];
