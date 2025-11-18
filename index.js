const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/mamoon', (req, res) => {
    res.send('Mamoon Sahab Zindabaad');
});

app.get('/shara', (req, res) => {
    res.send('From Mamoon Ahmad,\n To Shara Biharan,\n <h1>Ainthegi To Apne Ghar Bethegii ....</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});