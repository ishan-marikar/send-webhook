const async = require('async');
const unirest = require('unirest');


var sendWebHooks = (urls, data, callback) => {

  if (typeof callback !== 'function') {
    callback = (error, response) => {
      if (error) console.error(error);
      console.log('WebHooks sent.');
    };
  }

  var httpGet = (url, _callback) => {
    unirest.post(url)
      .type('json')
      .send(data)
      .end((response) => {
        _callback(null, response.body);
      })
  };

  async.map(urls, httpGet, (error, response) => {
    if (error) return callback(error, null);
    return callback(null, true);
  });
};

module.exports = sendWebHooks;
