FIFO Pet Rescue Server \

Contributors: Balay Aydemir \

Tech Stack: NodeJS, Express \

Endpoints: \

GET \
 /api/dogs - returns queue of dogs available for adoption \
 /api/cats - returns queue of cats available for adoption \
 /api/dog_users - returns queue of adopters interested in adopting dogs \
 /api/cat_users - returns queue of adopters interested in adopting cats \
 /api/adopt - dequeues an adopter and a type of pet and adds them to the success stories array. returns the updated queues for both the animal and users \
 /api/success - returns an array of success stories (animals that have been adopted) \

POST
  /api/dog_users - adds a user to the dog users queue \
  /api/cat_users - adds a user to the cat users queue \