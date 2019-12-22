const express = require('express');
const { Queues } = require('../Queue/QueueFuncs');

const DogsRouter = express.Router();

DogsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(Queues.dogQueue.first);
  });

module.exports = DogsRouter;