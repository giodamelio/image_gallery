import test from 'ava';
import supertest from 'supertest-as-promised';

import server from '../src';

test('List images', () => (
  supertest(server.listen())
    .get('/api/images')
    .expect(200)
    .expect([])
));
