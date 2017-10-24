const verifier = require('pact').Verifier;
const path = require('path');

const thing = path.resolve(process.cwd(), '../frontend/pacts');
console.log(thing);

let opts = {
  providerBaseUrl: 'http://localhost:5000/pacts',
  pactUrls: [path.resolve(process.cwd(), '../frontend/pacts/app-api.json')],
  provider: 'API',
};

console.log(opts.pactUrls);

verifier.verifyProvider(opts)
.then(() => {
  console.log('SUCCESS');
})
.catch((e) => {
  console.log(e);
  console.log('FAIL');
});
