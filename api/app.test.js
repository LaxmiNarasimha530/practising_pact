const verifier = require('pact').Verifier;
const path = require('path');
const test = require('blue-tape');

let opts = {
  providerBaseUrl: 'http://localhost:5000/pacts',
  pactUrls: [path.resolve(process.cwd(), './pacts/app-api.json')],
  provider: 'API',
};

console.log(opts.pactUrls);

test('Run Pact test', (t) => {
  verifier.verifyProvider(opts)
    .then(() => {
      console.log('SUCCESS');
      t.pass('Pact was met.');
    })
    .catch((e) => {
      console.log(e);
      console.log('FAIL');
      t.fail('Pact was not met.');
    })
  .then(() => {
    t.end();
  });
});

