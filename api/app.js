const express = require('express');
const app = express();

const data = require('./data/data');

app.get('/posts', (req, res) => {
  res.send(data.data)
});

app.listen(5000, () => {
  console.log('API is running on port 5000');
});
