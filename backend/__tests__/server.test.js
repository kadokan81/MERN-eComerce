const request = require('supertest');
import { app } from '../server.js';
describe('GET /user', function () {
	it('responds with json', function (done) {
		request(app)
			.get('/api/products')

			.expect(200, done);
	});
});
