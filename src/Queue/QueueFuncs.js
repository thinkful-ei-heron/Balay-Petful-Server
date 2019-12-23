const Queue = require('./Queue');
const STORE = require('../Store');

let dogQueue = new Queue();
let catQueue = new Queue();
let dogUserQueue = new Queue();
let catUserQueue = new Queue();

function onLoadQueue() {
  STORE.dogs.forEach(dog => dogQueue.enqueue(dog));
  STORE.cats.forEach(cat => catQueue.enqueue(cat));
  STORE.dogUsers.forEach(user => dogUserQueue.enqueue(user));
  STORE.catUsers.forEach(user => catUserQueue.enqueue(user));
}

function adoptCat() {
  let user = catUserQueue.dequeue();
  let cat = catQueue.dequeue();
  let petName = cat.name;
  let image = cat.imageURL;
  let imageDescription = cat.imageDescription;

  STORE.success.push({
    petName, 
    user, 
    image, 
    imageDescription
  });
}

function adoptDog() {
  let user = dogUserQueue.dequeue();
  let dog = dogQueue.dequeue();
  let petName = dog.name;
  let image = dog.imageURL;
  let imageDescription = dog.imageDescription;

  STORE.success.push({
    petName, 
    user, 
    image, 
    imageDescription
  });


}

let Queues = {
  dogQueue, 
  catQueue, 
  catUserQueue,
  dogUserQueue
};

module.exports = {
  onLoadQueue, 
  adoptCat, 
  adoptDog,
  Queues
};

