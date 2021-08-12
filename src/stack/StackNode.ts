export default class StackNode<T> {
  private next: StackNode<T>;
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setNext(node: StackNode<T>): void {
    this.next = node;
  }

  getNext(): StackNode<T> {
    return this.next;
  }
}