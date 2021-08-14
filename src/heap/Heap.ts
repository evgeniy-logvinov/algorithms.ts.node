export default class Heap<T> {
  private container: T[] = [];

  getLeftChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 2;
  }

  getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this.container.length;
  }

  hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this.container.length;
  }

  getLeftChild(parentIndex: number): T {
    return this.container[this.getLeftChildIndex(parentIndex)];
  }

  getRightChild(parentIndex: number): T {
    return this.container[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex: number): T {
    return this.container[this.getParentIndex(childIndex)];
  }

  swap(firstIndex: number, secondIndex: number): void {
    const current = this.container[firstIndex];
    this.container[firstIndex] = this.container[secondIndex];
    this.container[secondIndex] = current;
  }

  peek(): T {
    return this.container.length ? this.container[0] : null;
  }

  add(value: T): void {
    const firstIndex = this.container.length;
    this.container[firstIndex] = value;
    this.heapifyUp(firstIndex);
  }

  poll(): T {
    if (!this.container.length) {
      return null;
    }

    const lastIndex = this.container.length - 1;
    const res = this.container[0];
    const index = 0;
    this.swap(lastIndex, index);

    this.container.length = this.container.length - 1;

    this.heapifyDown(index);
    return res;
  }

  find(value: T): number[] {
    // const res = this.container.filter((el) => el === item);
    const res = this.container.reduce<number[]>((prev: number[], curr: T, currIndex: number) => {
      if (curr === value) {
        prev.push(currIndex);
      }

      return prev;
    }, [])

    return res;
  }

  remove(value: T): void{
    const items = this.find(value);

    while (items.length) {
      const indexToRemove = items.pop();
      if (indexToRemove === this.container.length - 1) {
        this.container.pop();
      } else {
        this.container[indexToRemove] = this.container.pop();
        if (!this.pareIsInCorrectOrder(indexToRemove, this.getParentIndex(indexToRemove))) {
          this.heapifyUp(indexToRemove);
        } else {
          this.heapifyDown(indexToRemove);
        }
      }
    }
  }

  heapifyUp(index: number): void {
    while (this.hasParent(index) && !this.pareIsInCorrectOrder(index, this.getParentIndex(index))) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  heapifyDown(index: number): void {
    let currentIndex = index;

    while (this.hasLeftChild(currentIndex) || this.hasRightChild(currentIndex)) {
      const maxElementIndex = this.compare(this.getLeftChild(currentIndex), this.getRightChild(currentIndex)) ? this.getRightChildIndex(currentIndex): this.getLeftChildIndex(currentIndex);

      if (!this.pareIsInCorrectOrder(maxElementIndex, currentIndex)) {
        this.swap(maxElementIndex, currentIndex);
        currentIndex = maxElementIndex;
      } else {
        return;
      }
    }
  }

  pareIsInCorrectOrder(firstIndex: number, secondIndex: number): boolean {
    return this.compare(this.container[firstIndex], this.container[secondIndex]);
  }

  compare(a: T, b: T): boolean {
    throw new Error( `Please implement comparator for a ${a} b ${b}`);
  }

  toArray(): T[] {
    return this.container;
  }

  toString(): string {
    return this.container.join(', ');
  }
}