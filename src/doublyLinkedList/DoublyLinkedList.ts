import DoublyLinkedListNode from "./DoublyLinkedListNode";

export default class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> = null;
  tail: DoublyLinkedListNode<T> = null;

  constructor(node: DoublyLinkedListNode<T> = null) {
    this.head = node;
    this.tail = node;
  }

  append(value: T): void {
    const node = new DoublyLinkedListNode<T>(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    let current = this.head;

    while(current) {
      if (!current.next) {
        current.next = node;
        node.prev = current;
        this.tail = node;
        return;
      }

      current = current.next;
    }
  }

  prepend(value: T): void {
    const node = new DoublyLinkedListNode<T>(value);
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

  convertToForwardArray(): T[] {
    let current = this.head;
    const res: T[] = [];
    while (current) {
      res.push(current.value);
      current = current.next;
    }

    return res;
  }

  convertToBackArray(): T[] {
    let previous = this.tail;
    const res: T[] = [];

    while (previous) {
      res.push(previous.value);
      previous = previous.prev;
    }

    return res;
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

  toStringBack(callback: (head: DoublyLinkedListNode<T>) => string = null): string {
    if(callback) {
      return callback(this.tail);
    }

    const res = [];
    let current = this.tail;

    while(current) {
      res.push(current.value);
      current = current.prev;
    }

    return res.join(', ');
  }
}