const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/random', (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  res.render('random', { number });
});

app.get('/cats', (req, res) => {
  const cats = ['jack', 'meow', 'sipper', 'cody'];

  res.render('cats', { cats });
});

app.get('/dogs/:breed', (req, res) => {
  const { breed } = req.params;

  res.render('breed', { breed });
});

app.get('*', (req, res) => {
  res.render('error');
});

app.listen(3000, () => console.log('Listening at port 3000'));
