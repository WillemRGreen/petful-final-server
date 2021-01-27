const Queue = require('../../queue/Queue');
const store = require('../../../store');

const cats = {
  cats: new Queue(),
};

store.cats.forEach(cat => cats.cats.enqueue(cat));

module.exports = {
  get() {
    let newCats = [cats.cats.first.value];
    return newCats;
  },

  dequeue() {
    return cats.cats.dequeue();
  },
};
