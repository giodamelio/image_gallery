import test from 'ava';
import supertest from 'supertest-as-promised';
import Nedb from 'nedb';
import bluebird from 'bluebird';

import createServer from '../src';
import testData from './testdata.json';

// Make sure each test has a new copy of the test data
test.beforeEach(async (t) => {
  // Create test database
  t.context.database = bluebird.promisifyAll(new Nedb({
    timestampData: true,
  }));

  // Load the test data
  await t.context.database.insertAsync(testData);

  // Create the server
  t.context.server = createServer(t.context.database);
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

test('Add image', async (t) => {
  t.plan(1);

  // Add the image
  await supertest(t.context.server.listen())
    .post('/api/images')
    .send({
      url: 'https://i.imgur.com/aGllzir.gif',
      description: 'Infinity Battle',
    })
    .expect(200);

  const data = await t.context.database.findAsync({});
  t.is(data.length, 4);
});
