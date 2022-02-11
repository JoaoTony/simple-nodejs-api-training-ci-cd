const express = require('express');

const port = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log('listening on port ' + port)
});

module.exports = app;

