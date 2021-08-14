import Heap from "./Heap";

export default class HeapMin<T> extends Heap<T> {

  compare(a: T, b: T): boolean {
    return a > b;
  }
}