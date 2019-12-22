const Queue = require('./Queue');
const STORE = require('../Store');

let dogQueue = new Queue();
let catQueue = new Queue();
let userQueue = new Queue();

function onLoadQueue() {
  STORE.dogs.forEach(dog => dogQueue.enqueue(dog));
  STORE.cats.forEach(cat => catQueue.enqueue(cat));
  STORE.users.forEach(user => userQueue.enqueue(user));
}

function adoptCat() {
  let user = userQueue.dequeue();
  let cat = catQueue.dequeue();
  let petName = cat.petName;
  let image = cat.image;
  let imageDescription = cat.imageDescription;

  STORE.success.push({
    petName, 
    user, 
    image, 
    imageDescription
  });
}

function adoptDog() {
  let user = userQueue.dequeue();
  let dog = dogQueue.dequeue();
  let petName = dog.petName;
  let image = dog.image;
  let imageDescription = dog.imageDescription;

  STORE.success.push({
    petName, 
    user, 
    image, 
    imageDescription
  });

  return dogQueue;
}

let Queues = {
  dogQueue, 
  catQueue, 
  userQueue
};

module.exports = {
  onLoadQueue, 
  adoptCat, 
  adoptDog,
  Queues
};

