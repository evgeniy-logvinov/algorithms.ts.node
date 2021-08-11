// import LinkedList from "../linkedList/LinkedList";
// import LinkedListNode from "../linkedList/LinkedListNode";

import QueueNode from "./QueueNode";

export default class Queue<T> {
  // add elements to head
  private head: QueueNode<T>;
  // remove from tail
  private tail: QueueNode<T>;

  peek(): T {
    if (!this.head) {
      return null;
    }

    return this.head.getValue() || null;
  }

  push(value: T): void {
    const node = new QueueNode<T>(value);
    if (!this.head) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.setNext(node);
    }


    this.tail = node;
  }

  pop(): T {
    const res = this.head;
    if (this.head) {
      this.head = this.head.getNext();
    }

    return res ? res.getValue() : null;
  }

  toArray(): T[] {
    const res = [];
    let current = this.head;
    while (current) {
      res.push(current.getValue());
      current = current.getNext();
    }

    return res;
  }

  toString(): string {
    return this.toArray().join(', ');
  }

  getHead(): QueueNode<T> {
    return this.head;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  getTail(): QueueNode<T> {
    return this.tail;
  }
}