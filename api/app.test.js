const verifier = require('pact').Verifier;
const path = require('path');
const test = require('blue-tape');
// const fs = require('fs');

// fs.copyFile('../frontend/pacts/app-api.json', './pacts/app-api.json', (err) => {
//   if (err) throw 'There is no pact file; you probably need to run the front end tests';
//   console.log('Pact file was copied');
// })

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

