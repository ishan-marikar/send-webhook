const http = require('http');

module.exports = class Server {

  constructor(options) {
    this.server = http.createServer((request, response, next) => {
        var body = [];
        request.on('data',(chunk) => {
          body.push(chunk);
        }).on('end',() => {
            body = Buffer.concat(body).toString();
            response.writeHead(200, { 'Content-Type': 'text/json' });
            response.end(JSON.stringify({
              method: request.method,
              data: body
            }));
        });
    });
  }

  listen() {
    this.server.listen.apply(this.server, arguments);
  }

  close() {
    this.server.close();
  }
}