"use strict";

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = []; // Queue for dogs
    this.catQueue = []; // Queue for cats
  }

  // Implement enqueue method
  enqueue(animal) {
    if (animal.species === "dog") {
      this.dogQueue.push(animal);
    } else if (animal.species === "cat") {
      this.catQueue.push(animal);
    }
  }

  // Implement dequeue method
  dequeue(pref) {
    if (pref === "dog") {
      if (this.dogQueue.length > 0) {
        return this.dogQueue.shift(); // Dequeue the first dog
      }
    } else if (pref === "cat") {
      if (this.catQueue.length > 0) {
        return this.catQueue.shift(); // Dequeue the first cat
      }
    } else {
      // If preference is not "dog" or "cat", return the oldest animal
      if (this.dogQueue.length === 0) {
        return this.catQueue.shift();
      } else if (this.catQueue.length === 0) {
        return this.dogQueue.shift();
      } else {
        // Compare timestamps to return the oldest animal
        if (this.dogQueue[0].timestamp < this.catQueue[0].timestamp) {
          return this.dogQueue.shift();
        } else {
          return this.catQueue.shift();
        }
      }
    }
    return null; // Return null if no matching animal found
  }
}

module.exports = { AnimalShelter, Animal };
