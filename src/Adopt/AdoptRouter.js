const express = require('express');
const { Queues, adoptCat, adoptDog } = require('../Queue/QueueFuncs');

const AdoptRouter = express.Router();

AdoptRouter
  .route('/:animalType')
  .get((req, res, next) => {
    let animalType = req.params.animalType;
    if (animalType === 'cat') {
      adoptCat();
      res.status(200).json({cats: Queues.catQueue.first, users: Queues.catUserQueue.first});
    }
    if (animalType === 'dog') {
      adoptDog();
      res.status(200).json({dogs: Queues.dogQueue.first, users: Queues.dogUserQueue.first});
    }
  });

module.exports = AdoptRouter;