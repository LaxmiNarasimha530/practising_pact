import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

export const makeGetRequest = () => {
  axios.get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { makeGetRequest as default };
