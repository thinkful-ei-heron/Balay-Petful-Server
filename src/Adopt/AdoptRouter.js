const express = require('express');
const { Queues, adoptCat, adoptDog } = require('../Queue/QueueFuncs');

const AdoptRouter = express.Router();

AdoptRouter
  .route('/:animalType')
  .get((req, res, next) => {
    let animalType = req.params.animalType;
    if (animalType === 'cat') {
      adoptCat();
      res.status(200).json(Queues.catQueue);
    }
    if (animalType === 'dog') {
      adoptDog();
      res.status(200).json(Queues.dogQueue);
    }
  });

module.exports = AdoptRouter;