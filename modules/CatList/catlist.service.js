const Queue = require('../queue/Queue');
const store = require('../../store');

const catList = new Queue();
store.catList.forEach(person => catList.enqueue(person));

module.exports = {
  get() {
    return catList.all();
  },

  getLengthOfQueue() {
    return catList.all().length;
  },

  enqueue(name) {
    return catList.enqueue(name);
  },

  dequeue(person) {
    return catList.dequeue(person);
  },
};
