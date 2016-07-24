# send-webhook
[![NPM](https://nodei.co/npm/send-webhook.png)](https://nodei.co/npm/send-webhook/)

``` js
const webhook = require('send-webhook');

const urls = [
  'http://example.com/webook_reciever',
  'http://johndoe.com/webhook',
  'http://incoming.com/recieve'
];

const data = {
  // This can be anything you want to send.
  status: true,
  data: {
    message: 'This is a sample web-hook that will be sent via POST.'
  }
};

webhook(urls, data, (error, status) => {
  if(error) console.log(error);
  console.log('Webhooks have been sent.');
});

/*
  RESULT 1
    URL: http://johndoe.com/webhook
    TYPE: POST
    MIME: application/json
    DATA:
      {
        status: true,
        data: {
          message: 'This is a sample web-hook that will be sent via POST.'
        }
      }
 */
```
