const inlineScript = require('./inline-script');
const inlineStyle = require('./inline-style');
const origin = require('./origin');
const whitelist = require('./whitelist');

module.exports = require('square-brackets/server')({
  inlineScript,
  inlineStyle,
  origin,
  whitelist,
});
