const express = require('express');
const STORE = require('../Store');

const SuccessRouter = express.Router();

SuccessRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(STORE.success);
  });

module.exports = SuccessRouter;