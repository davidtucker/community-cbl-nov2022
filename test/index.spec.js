const server = require('../index');
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('API', () => {

  describe('/', () => {

    // This is here just as a sample test.  You can use this as a baseline to implement
    // a more comprehensive test of the API.
    it('should return a 200 status', (done) => {
      chai.request(server).get('/').end(((err, res) => {
        res.should.have.status(200);
        done();
      }))
    });

  });

});
