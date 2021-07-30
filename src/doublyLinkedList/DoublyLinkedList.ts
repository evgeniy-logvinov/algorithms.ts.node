import DoublyLinkedListNode from "./DoublyLinkedListNode";

export default class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> = null;
  tail: DoublyLinkedListNode<T> = null;

  constructor(node: DoublyLinkedListNode<T> = null) {
    this.head = node;
    this.tail = node;
  }

  append(node: DoublyLinkedListNode<T>): void {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    let current = this.head;

    while(current) {
      if (!current.next) {
        current.next = node;
        current.next.prev = current.next;
        this.tail = current.next;
        return;
      }

      current = current.next;
    }
  }

  prepend(node: DoublyLinkedListNode<T>): void {
    const current = node;
    current.next = this.head;

    if (this.head) {
      this.head.prev = node;
    }

    if (!this.tail) {
      this.tail = node;
    }

    this.head = node;
  }

  toString(callback: (head: DoublyLinkedListNode<T>) => string = null): string {
    if(callback) {
      return callback(this.head);
    }

    const res = [];
    let current = this.head;

    while(current) {
      res.push(current.value);
      current = current.next;
    }

    return res.join(', ');
  }
}