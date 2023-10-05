# Animal Shelter Queue

## Feature Tasks

- Create a class called AnimalShelter which holds only dogs and cats.
- The shelter operates using a first-in, first-out approach.
- Implement the following methods:

  - enqueue

    - Arguments: animal
      - `animal` can be either a dog or a cat object.
      - It must have a species property that is either `"cat"` or `"dog"`
      - It must have a `name` property that is a string.

  - dequeue

    - Arguments: pref
      - `pref` can be either `"dog"` or `"cat"`
    - Return: either a dog or a cat, based on preference.
      - If pref is not `"dog"` or `"cat"` then return null.

## Testing

- enqueue should add animals to the correct queue
- dequeue should return the oldest animal based on preference

## Resources

- ChatGPT
  [Full Convo](https://docs.google.com/document/d/1cKlaFo6bZjVVz8XLOlyVwAfPxN0EetUMb8N8R0UUD_s/edit?usp=sharing)
