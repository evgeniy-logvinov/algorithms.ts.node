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
      const list = new DoublyLinkedList();

      list.append(123);
      list.append(432);
      list.append(555);

      expect(list.toString()).toBe('123, 432, 555');
    })
  })

  describe('toStringBack', () => {
    it('should get a string with value', () => {
      const node = new DoublyLinkedListNode<number>(123);
      const list = new DoublyLinkedList(node);

      expect(list.toStringBack()).toBe('123')
    })

    it('should get a string with values', () => {
      const list = new DoublyLinkedList();

      list.append(123);
      list.append(432);
      list.append(555);

      expect(list.toStringBack()).toBe('555, 432, 123');
    })
  })

  describe('append', () => {
    it('should create list with head = tail', () => {
      const list = new DoublyLinkedList();

      list.append(4);

      expect(list.head).toBeDefined();
      expect(list.tail).toBeDefined();
      expect(list.head.value).toBe(4);
      expect(list.head).toBe(list.tail);
    })

    it('should append node to the list', () => {
      const list = new DoublyLinkedList();

      list.append(4);
      list.append(42);
      list.append(333);

      expect(list.head).toBeDefined();
      expect(list.tail).toBeDefined();
      expect(list.head.value).toBe(4);
      expect(list.tail.value).toBe(333);
      expect(list.toString()).toBe('4, 42, 333');
    })
  })

  describe('prepend', () => {
    it('should add element in the empty list', () => {
      const list = new DoublyLinkedList();
      list.prepend(44);

      expect(list.head).toBeDefined();
      expect(list.head.value).toBe(44);
    })

    it('it should add elements in the list', () => {
      const list = new DoublyLinkedList();

      list.prepend(44);
      list.prepend(55);
      list.prepend(66);
      list.prepend(88);

      expect(list.toString()).toBe('88, 66, 55, 44');
    })
  })

  describe('convertToForwardArray', () => {
    it('should get forward array values', () => {
      const list = new DoublyLinkedList();
      list.append(11);
      list.append(22);
      list.append(33);
      list.append(44);

      expect(list.convertToForwardArray().join(', ')).toBe([11, 22, 33, 44].join(', '))
    })
  })

  describe('convertToBackArray', () => {
    it('should get back array values', () => {
      const list = new DoublyLinkedList();
      list.append(11);
      list.append(22);
      list.append(33);
      list.append(44);
      // console.log(list.convertToBackArray());
      expect(list.convertToBackArray().join(', ')).toBe([44, 33, 22, 11].join(', '))
    })
  })
})