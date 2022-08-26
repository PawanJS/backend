const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => console.log(`App is running on port ${port}`));

app.get('/', (req, res) => {
  res.send('This is a Homepage!');
});

app.get('/cats', (req, res) => {
  res.send('Meow!');
});

app.get('/dogs', (req, res) => {
  res.send('Woof!');
});

app.get('/dogs/:breed', (req, res) => {
  const { breed } = req.params;
  res.send(`<h1>You are viewing the ${breed} breed!</h1>`);
});

app.get('/dogs/:breed/:age', (req, res) => {
  const { breed, age } = req.params;
  res.send(`<h1>The average age of ${breed} breed is ${age}!</h1>`);
});

app.get('/search', (req, res) => {
  const { q } = req.query;

  if (!q) res.send('<h1>NOTHING FOUND IF NOTHING SEARCHED!</h1>');

  res.send(`You  are viewing search result for ${q}!`);
});

app.get('*', (req, res) => {
  res.send('404, No page found!');
});
