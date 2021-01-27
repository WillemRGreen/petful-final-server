const express = require('express');
const json = require('body-parser').json();

const Dogs = require('./dogs.service');

const router = express.Router();

router.get('/', (req, res) => {
  let results = Dogs.get();
  return res.status(200).json(results);
});

router.delete('/', json, (req, res) => {
  return res.status(204).json(Dogs.dequeue());
});

module.exports = router;