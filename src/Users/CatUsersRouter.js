const express = require('express');
const { Queues } = require('../Queue/QueueFuncs');
const jsonBodyParser = express.json();


const CatUsersRouter = express.Router();

CatUsersRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(Queues.catUserQueue.first);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { user } = req.body;
    console.log(req.body);
    Queues.catUserQueue.enqueue(user);
    res.status(201).json(Queues.catUserQueue);
  });



module.exports = CatUsersRouter;