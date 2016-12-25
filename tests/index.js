const assert = require('assert');
const http = require('http');

// This is probably bad, I know.
const Server = require('./server');
const web1 = new Server();
const web2 = new Server();

// and the main protagonist
const webhook = require('../index');

describe('webhook', ()=> {

    before(() => {
        web1.listen(8000);
        web2.listen(9000);
    });

    after(() => {
        web1.close();
        web2.close();
    });

    it('should work with a single url', () => {
        webhook('http://localhost:8000', {
            status: true
        }, (error, response) => {
            console.log(body);
            assert(true, response.body.data.status);
        });
    });

    it('should work with a multiple urls', () => {
        webhook( [
            'http://localhost:8000',
            'http://localhost:9000'
        ], {
            status: true
        }, (error, response) => {
            console.log(response);
            assert(true, response.body.data.status);
        });
    });
});