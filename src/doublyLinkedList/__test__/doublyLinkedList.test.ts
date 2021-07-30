import DoublyLinkedList from "../DoublyLinkedList";
import DoublyLinkedListNode from "../DoublyLinkedListNode";

describe('DoublyLinkedListNode', () => {
  it('should create correct node with value', () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.prev).toBeNull();
    expect(node.next).toBeNull();
  })

  it('should create correct node with prev link', () => {
    const nodeHead = new DoublyLinkedListNode(2);
    const node = new DoublyLinkedListNode(5);

    nodeHead.next = node;
    node.prev = nodeHead;

    expect(nodeHead.next).toBeDefined();
    expect(nodeHead.next.value).toBe(5);
    expect(nodeHead.prev).toBeNull();
    expect(node.prev).toBeDefined();
    expect(node.prev.value).toBe(2);
    expect(node.next).toBeNull();
  })

  describe('toString', () => {
    it('should get a string with value', () => {
      const node = new DoublyLinkedListNode(5);

      expect(node.toString()).toBe('5');
    })
  })
});

describe('DoublyLinkedList', () => {
  it('should create empty list', () => {
    const list = new DoublyLinkedList();
    expect(list).toBeDefined();
  })

  it('should create list with one node', () => {
    const node = new DoublyLinkedListNode<number>(1234);
    const list = new DoublyLinkedList(node);
    expect(list).toBeDefined();
    expect(list.toString()).toBe('1234');
  })

  describe('toString', () => {
    it('should get a string with value', () => {
      const node = new DoublyLinkedListNode<number>(123);
      const list = new DoublyLinkedList(node);

      expect(list.toString()).toBe('123')
    })

    it('should get a string with values', () => {
      const node = new DoublyLinkedListNode<number>(123);
      const node2 = new DoublyLinkedListNode<number>(432);
      const node3 = new DoublyLinkedListNode<number>(555);
      const list = new DoublyLinkedList(node);

      list.append(node2);
      list.append(node3);

      expect(list.toString()).toBe('123, 432, 555');
    })
  })

  describe('append', () => {
    it('should create list with head = tail', () => {
      const node = new DoublyLinkedListNode<number>(4);
      const list = new DoublyLinkedList();

      list.append(node);

      expect(list.head).toBeDefined();
      expect(list.tail).toBeDefined();
      expect(list.head.value).toBe(4);
      expect(list.head).toBe(list.tail);
    })

    it('should append node to the list', () => {
      const node = new DoublyLinkedListNode<number>(4);
      const node2 = new DoublyLinkedListNode<number>(42);
      const node3 = new DoublyLinkedListNode<number>(333);

      const list = new DoublyLinkedList();

      list.append(node);
      list.append(node2);
      list.append(node3);

      expect(list.head).toBeDefined();
      expect(list.tail).toBeDefined();
      expect(list.head.value).toBe(4);
      expect(list.tail.value).toBe(333);
      expect(list.toString()).toBe('4, 42, 333');
    })
  })

  describe('prepend', () => {
    it('should add element in the empty list', () => {
      const node = new DoublyLinkedListNode<number>(44);
      const list = new DoublyLinkedList();
      list.prepend(node);

      expect(list.head).toBeDefined();
      expect(list.head.value).toBe(44);
    })

    it('it should add elements in the list', () => {
      const node = new DoublyLinkedListNode<number>(44);
      const node2 = new DoublyLinkedListNode<number>(55);
      const node3 = new DoublyLinkedListNode<number>(66);
      const node4 = new DoublyLinkedListNode<number>(88);
      const list = new DoublyLinkedList();

      list.prepend(node);
      list.prepend(node2);
      list.prepend(node3);
      list.prepend(node4);

      expect(list.toString()).toBe('88, 66, 55, 44');
    })
  })
})