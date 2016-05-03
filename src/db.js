import path from 'path';

import bluebird from 'bluebird';
import Nedb from 'nedb';

let dbPath;
if (process.env.NODE_ENV === 'test') {
  dbPath = path.join(__dirname, '../test/test.data');
} else {
  dbPath = path.join(__dirname, '../database.data');
}

export default bluebird.promisifyAll(new Nedb({
  filename: dbPath,
  autoload: true,
}));
