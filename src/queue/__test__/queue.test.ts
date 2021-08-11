import Queue from "../Queue";

describe('Queue', () => {
  describe('toString', () => {
    it('should return string value', () => {
      const queue = new Queue();
      queue.enqueue(45);

      expect(queue.toString()).toBe('45');
    })
  })

  describe('enqueue', () => {
    it('should insert value to empty queue', () => {
      const queue = new Queue();
      queue.enqueue(4522);

      expect(queue.getHead()).toBeDefined();
      expect(queue.getHead().value).toBeDefined();
      expect(queue.getHead().value).toBe(4522);
    })

    it('should insert value to not empty queue', () => {
      const queue = new Queue();

      queue.enqueue(4522);
      queue.enqueue(3);
      queue.enqueue(123);

      expect(queue.getHead()).toBeDefined();
      expect(queue.getHead().value).toBeDefined();
      expect(queue.getHead().value).toBe(4522);
      expect(queue.getHead().next).toBeDefined();
      expect(queue.getHead().next.value).toBeDefined();
      expect(queue.getHead().next.value).toBe(3);
    })
  })

  describe('dequeue', () => {
    it('should remove value from empty queue', () => {
      const queue = new Queue();
      queue.dequeue();

      expect(queue.getHead()).toBeNull();
    })

    it('should remove value from queue', () => {
      const queue = new Queue();

      queue.enqueue(4522);
      queue.enqueue(3);
      queue.enqueue(123);

      queue.dequeue();
      expect(queue.getHead()).toBeDefined();
      expect(queue.getHead().value).toBeDefined();
      expect(queue.getHead().value).toBe(3);
      expect(queue.getHead().next).toBeDefined();
      expect(queue.getHead().next.value).toBeDefined();
      expect(queue.getHead().next.value).toBe(123);
    })
  })

  describe('isEmpty', () => {
    it('should check empty queue', () => {
      const queue = new Queue();

      expect(queue.isEmpty()).toBeTruthy();
    })

    it('should check not empty queue', () => {
      const queue = new Queue();

      queue.enqueue(144);

      expect(queue.isEmpty()).toBeFalsy();
    })
  })
})