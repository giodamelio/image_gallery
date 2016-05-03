import path from 'path';

import bluebird from 'bluebird';
import Nedb from 'nedb';

import createServer from './';

// Create the database
const dbPath = path.join(__dirname, '../database.data');
const db = bluebird.promisifyAll(new Nedb({
  filename: dbPath,
  autoload: true,
  timestampData: true,
}));

// Create the server
const server = createServer(db);
server.listen(3141);
console.log('Server started on port 3141');
