export default class DoublyLinkedListNode<T> {
  next: DoublyLinkedListNode<T> = null;
  prev: DoublyLinkedListNode<T> = null;
  value: T

  constructor(value: T) {
    this.value = value;
  }

  toString(callback: (value: T) => string = null): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}