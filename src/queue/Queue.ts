import LinkedList from "../linkedList/LinkedList";
import LinkedListNode from "../linkedList/LinkedListNode";

export default class Queue<T> {
  private linkedList: LinkedList<T>;

  constructor() {
    this.linkedList = new LinkedList<T>();
  }

  peek(): T {
    if (!this.linkedList.head) {
      return null
    }

    return this.linkedList.head.value;
  }

  enqueue(value: T): void {
    this.linkedList.appendElement(value);
  }

  dequeue(): T {
    const head = this.linkedList.head;
    this.linkedList.deleteHead();

    return head ? head.value : null;
  }

  toString(): string {
    return this.linkedList.toString();
  }

  getHead(): LinkedListNode<T> {
    return this.linkedList.head;
  }

  // getHead(): QueueNode<T> {
  //   return this.head;
  // }

  isEmpty(): boolean {
    return !this.linkedList.head;
  }

  // getTail(): QueueNode<T> {
  //   return this.tail;
  // }

  // pop(): void {

  // }
}