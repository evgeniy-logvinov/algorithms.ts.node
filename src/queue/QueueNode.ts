export default class QueueNode<T> {
  private value: T;
  private next: QueueNode<T>;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setNext(value: QueueNode<T>): void {
    this.next = value;
  }

  getNext(): QueueNode<T> {
    return this.next;
  }
}