import test from 'ava';
import supertest from 'supertest-as-promised';
import Nedb from 'nedb';
import bluebird from 'bluebird';

import createServer from '../src';
import testData from './testdata.json';

// Make sure each test has a new copy of the test data
test.beforeEach(async (t) => {
  // Create test database
  const db = bluebird.promisifyAll(new Nedb({
    timestampData: true,
  }));

  // Load the test data
  await db.insertAsync(testData);

  // Create the server
  t.context.server = createServer(db);
});

test('List images', (t) => {
  t.plan(1);

  return supertest(t.context.server.listen())
    .get('/api/images')
    .expect(200)
    .expect((res) => {
      t.is(res.body.length, 3);
    });
});
