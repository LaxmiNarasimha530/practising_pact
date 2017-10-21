import React from 'react';

import { Button } from './components';
import { makeGetRequest } from './helpers';

const App = () => (
  <div>
    <h1>Hello from React!</h1>
    <Button
      label="Click me"
      onclick={makeGetRequest}
    />
  </div>
);

export default App;
