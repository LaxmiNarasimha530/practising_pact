const express = require('express');
const app = express();

const data = require('./data/data');

const healthcheck = {
  ok: true
};

app.get('/posts', (req, res) => {
  console.log('Hit Posts end point!!');
  res.header('Content-Type', 'application/json');
  res.send(data.data)
});

app.get('/health', (req, res) => {
  console.log('Hit Health end point!!');
  res.header('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(healthcheck));
});

app.listen(5000, () => {
  console.log('API is running on port 5000');
});
