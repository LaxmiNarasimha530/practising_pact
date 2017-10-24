import axios from 'axios';

export const makeGetRequest = url => axios.get(url)
  .then(response => response)
  .catch(error => error);

export { makeGetRequest as default };
