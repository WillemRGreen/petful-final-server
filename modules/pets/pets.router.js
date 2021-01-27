const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  let results = Pets.get();
  return res.status(200).json(results);
});

router.get('/dogs', (req, res) => {
  // Return all pets currently up for adoption.
  let results = Pets.getDogs();
  return res.status(200).json(results);
});

router.get('/cats', (req, res) => {
  // Return all pets currently up for adoption.
  let results = Pets.getCats();
  return res.status(200).json(results);
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  return res.status(204).json(Pets.dequeue());
});

module.exports = router;
