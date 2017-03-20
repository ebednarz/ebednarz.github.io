'use strict';
const https = require('https');

const host = 'bednarz-bike.herokuapp.com';

const get = path => new Promise((resolve, reject) =>
  https
    .get({
      host,
      path,
      port: 443,
    }, response => {
      const queue = [];

      function onData(chunk) {
        queue.push(chunk);
      }

      function onEnd() {
        const responseBody = queue.join('');
        const data = JSON.parse(responseBody);
        resolve(data);
      }

      response
        .on('data', onData)
        .on('end', onEnd);
    })
    .on('error', reject)
);

module.exports = {
  get,
};
