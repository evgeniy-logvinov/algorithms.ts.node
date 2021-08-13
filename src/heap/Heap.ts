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

  add(value: T): void {
    const firstIndex = this.container.length;
    this.container[firstIndex] = value;
    this.heapifyUp(firstIndex);
  }

  remove(): void {
    const lastIndex = this.container.length - 1;
    const index = 0;
    this.swap(lastIndex, index);

    this.container.length = this.container.length - 1;

    this.heapifyDown(index);
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
      const maxElementIndex = this.getLeftChild(currentIndex) > this.getRightChild(currentIndex) ? this.getLeftChildIndex(currentIndex): this.getRightChildIndex(currentIndex);

      if (!this.pareIsInCorrectOrder(maxElementIndex, currentIndex)) {
        this.swap(maxElementIndex, currentIndex);
        currentIndex = maxElementIndex;
      } else {
        return;
      }
    }
  }

  pareIsInCorrectOrder(firstIndex: number, secondIndex: number): boolean {
    return this.container[firstIndex] < this.container[secondIndex];
  }

  toArray(): T[] {
    return this.container;
  }

  toString(): string {
    return this.container.join(', ');
  }
}