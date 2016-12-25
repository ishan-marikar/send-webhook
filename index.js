const async = require('async');
const unirest = require('unirest');


var sendWebHooks = (input, data, callback) => {

  var urls = (typeof input === 'string')? [input]:input;
  if (typeof callback !== 'function') {
    callback = (error, response) => {
      if (error) console.error(error);
      console.log('WebHooks sent.');
    };
  }

  var httpPost = (url, _callback) => {
    unirest.post(url)
      .type('json')
      .send(data)
      .end((response) => {
        _callback(null, response);
      })
  };

  async.map(urls, httpPost, (error, response) => {
    if (error) return callback(error, null);
    return callback(null, response);
  });
};

module.exports = sendWebHooks;
