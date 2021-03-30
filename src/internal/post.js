var request = require('request-promise');

require('dotenv').config();

const token = "7752~kyvtyeWw0Nh0eTtulblCmrsjmOv4ShH1pHJ7lihJ9jjei4eLp6Dfea55kwXnmGKs";

const postRequest = (url, body) => request({
  'method': 'POST',
  'uri': url,
  'json': true,
  'form': body,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
}).then(response => response).catch(err => console.log(err));

module.exports = postRequest;