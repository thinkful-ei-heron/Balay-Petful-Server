require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV, CLIENT_ORIGIN } = require('./config');
const DogUsersRouter = require('./Users/DogUsersRouter');
const DogsRouter = require('./Dogs/DogsRouter');
const CatsRouter = require('./Cats/CatsRouter');
const AdoptRouter = require('./Adopt/AdoptRouter');
const SuccessRouter = require('./Success/SuccessRouter');
const CatUsersRouter = require('./Users/CatUsersRouter');
const { onLoadQueue } = require('./Queue/QueueFuncs');

const app = express();



const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.get('/', function (req, res) {
  res.send(JSON.stringify({ Hello: 'World'}));
});

app.use('/api/dog_users', DogUsersRouter);
app.use('/api/cat_users', CatUsersRouter);
app.use('/api/dogs', DogsRouter);
app.use('/api/cats', CatsRouter);
app.use('/api/adopt', AdoptRouter);
app.use('/api/success', SuccessRouter);
onLoadQueue();




app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;