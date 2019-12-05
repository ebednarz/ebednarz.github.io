'use strict';

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
            href: '/app.css',
          }],
          ['script', {
            type: 'module',
            src: '/app.js',
          }],
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
