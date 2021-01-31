const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const people = new Queue()
store.people.forEach(person => people.enqueue(person))

// --------------------

module.exports = {
  getAll() {
    return people.all(people)
  },

  enqueue(person) {
    // Add a person to the queue.
    return people.enqueue(person);
  },

  dequeue() {
    // Remove a person from the queue.
    people.dequeue();
    return people.all();
  }
}
