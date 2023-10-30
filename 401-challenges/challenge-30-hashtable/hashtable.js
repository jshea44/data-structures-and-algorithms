import LinkedList from "./linkedList";

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let string = JSON.stringify(key);
    let sum = 0;
    for (let char of string) {
      sum += char.charCodeAt(0);
    }
    let largeNum = sum * 599;
    let hash = largeNum % this.size;
    return hash;
  }

  set(key, value) {
    let hash = this.hash(key);
    let payload = `${key}:${value}`;
    let values = this.buckets[hash];
    if (!values) {
      let list = new LinkedList();
      list.add(payload);
      this.buckets[hash] = list;
    } else {
      values.add(payload);
    }
  }

  get(key) {
    // given the size of the HashTable, how much of this code runs.
    let hash = this.hash(key); // 0(1)
    let list = this.buckets[hash]; // 0(1)
    if (!list) {
      console.log("NO VALUES PRESENT FOR GIVEN KEY");
      return;
    } else {
      return list.values(); // 0(m) runs as many times as there are values in the list.
    }
  }
}
