const express = require('express');
const { Queues, adoptCat, adoptDog } = require('../Queue/QueueFuncs');

const AdoptRouter = express.Router();

AdoptRouter
  .route('/:animalType')
  .get((req, res, next) => {
    let animalType = req.params.animalType;
    if (animalType === 'cat') {
      if (!Queues.catQueue) {
        res.status(400).json({ error: 'No cats available for adoption - check back later!'});
      }
      if (!Queues.catUserQueue) {
        res.status(400).json({ error: 'No adopter available'});
      }
      adoptCat();
      res.status(200).json({cats: Queues.catQueue.first, users: Queues.catUserQueue.first});
    }
    if (animalType === 'dog') {
      if (!Queues.dogQueue) {
        res.status(400).json({ error: 'No dogs available for adoption - check back later!'});
      }
      if (!Queues.dogUserQueue) {
        res.status(400).json({ error: 'No adopter available'});
      }
      adoptDog();
      res.status(200).json({dogs: Queues.dogQueue.first, users: Queues.dogUserQueue.first});
    }
  });

module.exports = AdoptRouter;