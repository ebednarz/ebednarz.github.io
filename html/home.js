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
    ['head', {
      itemscope: '',
    }, [
      ['meta', {
        charset: 'utf-8',
      }],
      ['meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0',
      }],
      ['title', {
        lang: 'de',
      }, title],
      ['link', {
        rel: 'stylesheet',
        href: '/assets/style/app.css',
      }],
      ['link', {
        itemprop: 'script-resource',
        href: '/assets/script/app.js',
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
