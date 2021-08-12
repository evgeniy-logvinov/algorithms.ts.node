import Stack from "../Stack";
import StackNode from "../StackNode";

describe('StackNode', () => {
  it('should create node with value', () => {
    const node = new StackNode<number>(23);

    expect(node).toBeDefined();
    expect(node.getValue()).toBe(23);
  })

  it('should add next param', () => {
    const node = new StackNode<number>(23);
    const nodeNext = new StackNode<number>(44);

    node.setNext(nodeNext);

    expect(node).toBeDefined();
    expect(node.getNext()).toBeDefined();
    expect(node.getNext().getValue()).toBeDefined();
    expect(node.getNext().getValue()).toBe(44);
  })
})

describe('Stack', () => {
  describe('push', () => {
    it('should add element to the list', () => {
      const stack = new Stack();

      stack.push(34);

      expect(stack).toBeDefined();
      expect(stack.peek()).toBe(34);
    })

    it('should add element to the list', () => {
      const stack = new Stack();

      stack.push(34);
      stack.push(44);
      stack.push(98);

      expect(stack).toBeDefined();
      expect(stack.peek()).toBe(98);
      expect(stack.top.getNext()).toBeDefined();
      expect(stack.top.getNext().getValue()).toEqual(44);
      expect(stack.toArray()).toEqual([98, 44, 34]);
    })
  })

  describe('toArray', () => {
    it('should get empty array', () => {
      const stack = new Stack();

      expect(stack).toBeDefined();
      expect(stack.toArray()).toEqual([]);
    })

    it('should get array from values', () => {
      const stack = new Stack();

      stack.push(1);
      stack.push(22);

      expect(stack).toBeDefined();
      expect(stack.toArray()).toEqual([22, 1]);
    })
  })

  describe('pop', () => {
    it('should get null for empty stack', () => {
      const stack = new Stack();

      expect(stack).toBeDefined();
      expect(stack.pop()).toBeNull();
    })

    it('should get top element value and remove from stack', () => {
      const stack = new Stack();

      stack.push(33);
      stack.push(66);
      stack.push(77);

      expect(stack).toBeDefined();

      const res = stack.pop();

      expect(res).toBeDefined();
      expect(res).toBe(77);
      expect(stack.toArray()).toEqual([66, 33]);
    })
  })

  describe('peek', () => {
    it('should get null for empty list', () => {
      const stack = new Stack();

      expect(stack).toBeDefined();
      expect(stack.peek()).toBe(null);
    })
  })

  describe('isEmpty', () => {
    it('should return true for empty list', () => {
      const stack = new Stack();

      expect(stack).toBeDefined();
      expect(stack.isEmpty()).toBeTruthy();
    })

    it('should return true for empty list', () => {
      const stack = new Stack();

      stack.push(435);

      expect(stack).toBeDefined();
      expect(stack.isEmpty()).toBeFalsy();
    })
  })
})
