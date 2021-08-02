export default class HashFunction<T> {
  private size = 10;

  constructor(size = 10) {
    this.size = size;
  }

  getIndex(value: T): number {
    let res = 0;
    for (let i = 0; i < value.toString().length; i++) {
      res += value.toString().charCodeAt(i);
    }
    return res % this.size;
  }
}