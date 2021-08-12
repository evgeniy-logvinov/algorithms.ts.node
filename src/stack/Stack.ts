import StackNode from "./StackNode";

export default class Stack<T> {
  top: StackNode<T>;

  peek(): T {
    return this.top ? this.top.getValue() : null;
  }

  push(value: T): void {
    const node = new StackNode(value);

    if (this.top) {
      node.setNext(this.top);
    }
    this.top = node;
  }

  pop(): T {
    if (!this.top) {
      return null;
    }

    const res = this.top.getValue();
    this.top = this.top.getNext();

    return res;
  }

  toArray(): T[] {
    const res = [];
    let current = this.top;

    while (current) {
      res.push(current.getValue());
      current = current.getNext();
    }

    return res;
  }
}