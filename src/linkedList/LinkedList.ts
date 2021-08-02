// 1. List contains nodes. Each node contains link to the next node.
import LinkedListNode from "./LinkedListNode";
export default class LinkedList<T> {
  head: LinkedListNode<T> = null;

  constructor(head: LinkedListNode<T> = null) {
    this.head = head;
  }

  // We need to find the last element and after that add new one and change link
  appendElement(value: T): void {
    const newNode = new LinkedListNode<T>(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // In the prepend method we need to add element
  // on the start position and after that change
  // link to our head
  prependElement(value: T): void {
    const newNode = new LinkedListNode<T>(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      const currentHead = this.head;
      this.head = newNode;
      newNode.next = currentHead;
    }
  }

  // Firstly we need to check is it first element in the list
  // or not. If yes, we need to remove only head.
  // If this is not first element, we need to change links in the previous node
  deleteElement(index: number): void {
    if (!index) {
      this.head = this.head.next;

      return;
    }

    let previous = this.head;

    for(let i = 0; previous && previous.next; i++) {
      if (i + 1 === index) {
        previous.next = previous.next.next;
        return;
      }
      previous = previous.next;
    }
  }

  toString(): string {
    let current = this.head;
    const res: string[] = [];
    while(current) {
      res.push(String(current.value));
      current = current.next;
    }

    return res.join(', ');
  }

  reverse(): void {
    let current = this.head;
    let previous: LinkedListNode<T> = null;
    let next: LinkedListNode<T> = null;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  fromArray(array: T[]): void {
    let prevNode: LinkedListNode<T> = null;
    array.forEach((el) => {
      const newNode = new LinkedListNode<T>(el);

      if (!this.head) {
        this.head = newNode;
      }

      if (prevNode) {
        prevNode.next = newNode;
      }
      prevNode = newNode;
    })
  }

  toArray(): T[] {
    let current = this.head;
    const array = [];
    while(current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  find(value: T): LinkedListNode<T> {
    let current = this.head;
    while(current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }
}
