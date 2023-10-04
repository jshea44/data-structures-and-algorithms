const { Animal, AnimalShelter } = require("./animal-shelter.js");

describe("AnimalShelter", () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test("enqueue should add animals to the correct queue", () => {
    shelter.enqueue(new Animal("dog", "Buddy"));
    shelter.enqueue(new Animal("cat", "Whiskers"));
    shelter.enqueue(new Animal("dog", "Fido"));

    expect(shelter.dogQueue).toEqual([
      new Animal("dog", "Buddy"),
      new Animal("dog", "Fido"),
    ]);
    expect(shelter.catQueue).toEqual([new Animal("cat", "Whiskers")]);
  });

  test("dequeue should return the oldest animal based on preference", () => {
    shelter.enqueue(new Animal("dog", "Buddy"));
    shelter.enqueue(new Animal("cat", "Whiskers"));
    shelter.enqueue(new Animal("dog", "Fido"));

    expect(shelter.dequeue("cat")).toEqual(new Animal("cat", "Whiskers"));
    expect(shelter.dequeue("dog")).toEqual(new Animal("dog", "Buddy"));
    expect(shelter.dequeue("parrot")).toEqual(new Animal("dog", "Fido"));
  });
});
