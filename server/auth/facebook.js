const {validateWithProvider} = require('./utils');

module.exports = {
  validateWithFacebook,
}

function validateWithFacebook(accessToken) {
  return validateWithProvider('facebook', accessToken);
}