const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/people', require('../people/people.router'));

app.use('/dog-list', require('../DogList/doglist.router'));
app.use('/cat-list', require('../CatList/catlist.router'));

app.use('/pets', require('../pets/pets.router'));

app.use('/cats', require('../pets/Cats/cats.router'));
app.use('/dogs', require('../pets/Dogs/dogs.router'));

module.exports = app;
