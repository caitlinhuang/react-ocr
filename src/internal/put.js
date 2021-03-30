var request = require('request-promise');

require('dotenv').config();

const token = "7752~kyvtyeWw0Nh0eTtulblCmrsjmOv4ShH1pHJ7lihJ9jjei4eLp6Dfea55kwXnmGKs";

const putRequest = (url, body) => request({
  'method': 'PUT',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response);

module.exports = putRequest;