import test from 'ava';
import supertest from 'supertest-as-promised';

import server from '../src';

test(() => (
  supertest(server.listen())
    .get('/')
    .expect(200)
    .expect('Hello World!')
));
