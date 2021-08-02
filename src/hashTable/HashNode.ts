export default class HashNode<T, P> {
  key: T = null;
  value: P = null;
  next: HashNode<T, P> = null;

  constructor(key: T = null, value: P = null) {
    this.key = key;
    this.value = value;
  }
}