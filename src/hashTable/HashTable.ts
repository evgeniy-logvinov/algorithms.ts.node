import HashFunction from "./HashFunction";
import HashNode from "./HashNode";

const defaultSize = 10;

export default class HashTable<T, P> {
  private buckets: HashNode<T, P>[];
  private hashFunction;
  private size;

  constructor(size = defaultSize) {
    this.size = size;
    this.hashFunction = new HashFunction(this.size);
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(this.size).fill(null).map(() => new HashNode<T, P>());
  }

  set(key: T, value: P): void {
    const index = this.hashFunction.getIndex(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    } else {
      let current: HashNode<T, P> = this.buckets[index];
      while(current) {
        if (current.next) {
          current = current.next;
        } else {
          current.next = new HashNode(key, value);
          return;
        }
      }
    }
  }

  delete(key: T): void {
    const index = this.hashFunction.getIndex(key);
    let current = this.buckets[index];
    let previous: HashNode<T, P> = null;

    if (!current) {
      throw new Error('Element not found');
    }
    // If we can have dublicated values,
    // we need to go through and delete all elements
    while(current) {
      if (current.key !== key) {
        if (current.next) {
          previous = current;
          current = current.next;
        }
      } else {
        previous.next = current.next;
        return;
      }
    }
  }

  getValue(key: T): P {
    const index = this.hashFunction.getIndex(key);
    let current = this.buckets[index];

    while (current) {
      if (current.key === key) {
        return current.value;
      }

      current = current.next;
    }

    return null;
  }

  toStringByIndex(index: number): string {
    let current = this.buckets[index];
    const res = [];

    while (current) {
      res.push(current.value);
      current = current.next;
    }

    return res.filter((el) => el).join(', ');
  }
}