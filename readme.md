# send-webhook
[![NPM](https://nodei.co/npm/send-webhook.png)](https://nodei.co/npm/send-webhook/)

``` js
const webhook = require('send-webhook');

const URLS = [
  'http://example.com/webook_reciever',
  'http://johndoe.com/webhook',
  'http://incoming.com/recieve'
];

const payload = {
  // This can be anything you want to send.
  status: true,
  data: {
    message: 'This is a sample web-hook that will be sent via POST.'
  }
};

/* 
  You can also do it to a single URL by just putting in a string
  instead of an array.
*/


webhook(URLS, payload, (error, status) => {
  if(error) console.error(error);
  console.log('Webhooks have been sent.');
});



/*
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
