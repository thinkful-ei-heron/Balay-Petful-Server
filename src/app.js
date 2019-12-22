require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const UsersRouter = require('./Users/UsersRouter');
const DogsRouter = require('./Dogs/DogsRouter');
const CatsRouter = require('./Cats/CatsRouter');
const AdoptRouter = require('./Adopt/AdoptRouter');
const { onLoadQueue } = require('./Queue/QueueFuncs');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/users', UsersRouter);
app.use('/api/dogs', DogsRouter);
app.use('/api/cats', CatsRouter);
app.use('/api/adopt', AdoptRouter);
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