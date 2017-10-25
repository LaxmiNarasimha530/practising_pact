import test from 'blue-tape';
import path from 'path';
import pact from 'pact';

import data from '../../data/data';

import { makeGetRequest } from './';

const MOCK_SERVER_PORT = 2202;
const PACT_MOCK_API = `http://localhost:${MOCK_SERVER_PORT}`;

test('MakeGetRequest should return correct data from real API', (t) => {
  const provider = pact({
    consumer: 'App',
    provider: 'API',
    port: MOCK_SERVER_PORT,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    logLevel: 'DEBUG',
    spec: 2,
  });

  const EXPECTED_BODY = data;

  provider.setup()
    .then(() => {
      console.log('Adding interaction');
      provider.addInteraction({
        state: 'I will return the expected data',
        uponReceiving: 'A request for data',
        withRequest: {
          method: 'GET',
          path: '/posts',
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: EXPECTED_BODY,
        },
      });
    })
    .then(() => makeGetRequest(`${PACT_MOCK_API}/posts`))
    .then((response) => {
      t.deepEqual(response.data, EXPECTED_BODY);
    })
    .catch((e) => {
      throw new Error(`Unable to start the Pact Server: ${e}`);
    })
    .then(() => {
      provider.verify();
      provider.finalize();
      t.end();
    });
});
