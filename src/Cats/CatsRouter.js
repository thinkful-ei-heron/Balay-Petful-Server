const express = require('express');
const { Queues } = require('../Queue/QueueFuncs');

const CatsRouter = express.Router();

CatsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(Queues.catQueue.first);
  });

module.exports = CatsRouter;