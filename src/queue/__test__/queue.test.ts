import Queue from "../Queue";
import QueueNode from "../QueueNode";

describe('QueueNode', () => {
  it('should create node with value', () => {
    const node = new QueueNode<number>(23);

    expect(node).toBeDefined();
    expect(node.getValue()).toBe(23);
  })

  it('should add next param', () => {
    const node = new QueueNode<number>(23);
    const nodeNext = new QueueNode<number>(44);

    node.setNext(nodeNext);

    expect(node).toBeDefined();
    expect(node.getNext()).toBeDefined();
    expect(node.getNext().getValue()).toBeDefined();
    expect(node.getNext().getValue()).toBe(44);
  })
})

describe('Queue', () => {
  describe('toString', () => {
    it('should return string value', () => {
      const queue = new Queue();
      queue.push(45);

      expect(queue.toString()).toBe('45');
    })
  })

  describe('push', () => {
    it('should insert value to empty queue', () => {
      const queue = new Queue();
      queue.push(4522);

      expect(queue.getHead()).toBeDefined();
      expect(queue.getHead().getValue()).toBeDefined();
      expect(queue.getHead().getValue()).toBe(4522);
    })

    it('should insert value to not empty queue', () => {
      const queue = new Queue();

      queue.push(4522);
      queue.push(3);
      queue.push(123);

      expect(queue.getHead()).toBeDefined();
      expect(queue.getHead().getValue()).toBeDefined();
      expect(queue.getHead().getValue()).toBe(4522);
      expect(queue.getHead().getNext()).toBeDefined();
      expect(queue.getHead().getNext().getValue()).toBeDefined();
      expect(queue.getHead().getNext().getValue()).toBe(3);
    })
  })

  describe('pop', () => {
    it('should remove value from empty queue', () => {
      const queue = new Queue();
      const res = queue.pop();

      expect(res).toBeNull();
      expect(queue.getHead()).toBeUndefined();
    })

    it('should remove value from queue', () => {
      const queue = new Queue();

      queue.push(4522);
      queue.push(3);
      queue.push(123);

      const res = queue.pop();
      expect(res).toBeDefined();
      expect(res).toBe(4522);
      expect(queue.getHead()).toBeDefined();
      expect(queue.getHead().getValue()).toBeDefined();
      expect(queue.getHead().getValue()).toBe(3);
      expect(queue.getHead().getNext()).toBeDefined();
      expect(queue.getHead().getNext().getValue()).toBeDefined();
      expect(queue.getHead().getNext().getValue()).toBe(123);
    })
  })

  describe('peek', () => {
    it('should get null value from the front of queue', () => {
      const queue = new Queue();
      const res = queue.peek();

      expect(res).toBeNull();
      expect(queue.getHead()).toBeUndefined();
    })

    it('should get value from the front', () => {
      const queue = new Queue();

      queue.push(4522);
      queue.push(3);
      queue.push(123);

      const res = queue.peek();
      expect(res).toBeDefined();
      expect(res).toBe(4522);
      expect(queue.getHead()).toBeDefined();
      expect(queue.getHead().getValue()).toBeDefined();
      expect(queue.getHead().getValue()).toBe(4522);
      expect(queue.getHead().getNext()).toBeDefined();
      expect(queue.getHead().getNext().getValue()).toBeDefined();
      expect(queue.getHead().getNext().getValue()).toBe(3);
    })
  })

  describe('isEmpty', () => {
    it('should check empty queue', () => {
      const queue = new Queue();

      expect(queue.isEmpty()).toBeTruthy();
    })

    it('should check not empty queue', () => {
      const queue = new Queue();

      queue.push(144);

      expect(queue.isEmpty()).toBeFalsy();
    })
  })
})