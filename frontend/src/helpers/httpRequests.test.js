import test from 'blue-tape';
import path from 'path';
import pact from 'pact';

import data from '../../data/data';

import { makeGetRequest } from './';

const MOCK_SERVER_PORT = 2202;
const PACT_MOCK_API = `http://localhost:${MOCK_SERVER_PORT}`;

let provider;

test('Mock server', (t) => {
  provider = pact({
    consumer: 'App',
    provider: 'API',
    port: MOCK_SERVER_PORT,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    logLevel: 'DEBUG',
    spec: 2,
  });

  const EXPECTED_BODY = data;
  const EXPECTED_BODY_HEALTH = { ok: true };

  // Set up the provider
  provider.setup()
    .then(() => {
    // Add the first interaction
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
      })
      // Add the second interaction
        .then(() => {
          provider.addInteraction({
            state: 'Another',
            uponReceiving: 'A data',
            withRequest: {
              method: 'GET',
              path: '/health',
            },
            willRespondWith: {
              status: 200,
              headers: { 'Content-Type': 'application/json; charset=utf-8' },
              body: { ok: true },
            },
          });
        })
      // Make a request to the mock server
        .then(() => makeGetRequest(`${PACT_MOCK_API}/posts`))
      // Check the response from the mock server
        .then((response) => {
          t.deepEqual(response.data, EXPECTED_BODY);
        })
      // Make another request to the mock server
        .then(() => makeGetRequest(`${PACT_MOCK_API}/health`))
      // Check the response from the mock server
        .then((response) => {
          t.deepEqual(response.data, EXPECTED_BODY_HEALTH);
        })
        .catch((e) => {
          throw new Error(`Unable to start the Pact Server: ${e}`);
        })
        .then(() => {
          // Verify and finalise the pact
          // This step saves the pact file so you can run it against the API
          provider.verify();
          provider.finalize();
          t.end();
        });
    });
});
