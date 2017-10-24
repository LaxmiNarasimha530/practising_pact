import test from 'blue-tape';
import EXPECTED_RESPONSE  from '../../data/data';

import { makeGetRequest } from './';

const REAL_API = 'https://jsonplaceholder.typicode.com/posts';

test('makeGetRequest should return correct data from real API', (t) => {
  return makeGetRequest(REAL_API)
  .then((response) => {
    t.deepEqual(EXPECTED_RESPONSE, response.data);
  });
  t.end();
});
