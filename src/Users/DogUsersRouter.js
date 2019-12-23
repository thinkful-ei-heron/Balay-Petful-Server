const express = require('express');
const { Queues } = require('../Queue/QueueFuncs');
const jsonBodyParser = express.json();


const DogUsersRouter = express.Router();

DogUsersRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(Queues.dogUserQueue.first);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { user } = req.body;
    Queues.dogUserQueue.enqueue(user);
    res.status(201).json(Queues.dogUserQueue);
  });



module.exports = DogUsersRouter;