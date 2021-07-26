export default class LinkedListNode<T> {
  value: T | null = null;
  next: LinkedListNode<T> | null = null;

  constructor(value: T, next = null) {
    this.next = next;
    this.value = value;
  }
}
