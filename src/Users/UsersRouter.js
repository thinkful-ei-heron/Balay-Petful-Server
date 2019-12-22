const express = require('express');
const { Queues } = require('../Queue/QueueFuncs');
const jsonBodyParser = express.json();


const UsersRouter = express.Router();

UsersRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(Queues.userQueue.first);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { user } = req.body;
    console.log(req.body);
    Queues.userQueue.enqueue(user);
    res.status(201).json(Queues.userQueue);
  });



module.exports = UsersRouter;