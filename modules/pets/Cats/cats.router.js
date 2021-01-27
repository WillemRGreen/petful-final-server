const express = require('express');
const json = require('body-parser').json();

const Cats = require('./cats.service');

const router = express.Router();

router.get('/', (req, res) => {
  let results = Cats.get();
  return res.status(200).json(results);
});

router.delete('/', json, (req, res) => {
  return res.status(204).json(Cats.dequeue());
});

module.exports = router;