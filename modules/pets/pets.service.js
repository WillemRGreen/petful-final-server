const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))


module.exports = {
  getNext(type) {
    if (type === 'cat') {
      return pets.cats.show();
    }
    if (type === 'dog') {
      return pets.dogs.show();
    }

    let nextUp = {
      cat: pets.cats.show(),
      dog: pets.dogs.show()
    }
    return nextUp;
  },

  // returns all pets
  getAll(type) {
    if (type === 'cats') {
      return pets.cats.all()
    } else if (type === 'dogs') {
      return pets.dogs.all()
    }
    else {
      throw error('Something went wrong!');
    }
  },

  dequeue(type) {
    if (type === 'cat') {
      pets.cats.dequeue();
      return pets.cats.all();
    }
    if (type === 'dog') {
      pets.dogs.dequeue();
      return pets.dogs.all();
    }
    throw error('Something went wrong please try again');
  }
};
