import LinkedListNode from './LinkedListNode';
import LinkedList from './LinkedList';

describe('List Node tests', () => {
  it('should create correct node with value', () => {
    const linkedListNode = new LinkedListNode(14);
    expect(linkedListNode.value).toBe(14);
    expect(linkedListNode.next).toBeNull();
  });

  it('should create correct node with object as a value', () => {
    const nodeValue = {key: 'test', value: 1};
    const linkedListNode = new LinkedListNode<{key: string, value: number}>(nodeValue);
    expect(linkedListNode.value.value).toBe(1);
    expect(linkedListNode.value.key).toBe('test');
    expect(linkedListNode.next).toBeNull();
  });

  it('should link two nodes', () => {
    const linkedListNode = new LinkedListNode<number>(2);
    const linkedListNodeHead = new LinkedListNode<number>(1, linkedListNode);
    expect(linkedListNodeHead.next).toBeDefined();
    expect(linkedListNode.next).toBeNull();
    expect(linkedListNodeHead.next.value).toBe(2);
  });
});

describe('List tests', () => {
  it('should init list without head', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });

  it('should init list with head', () => {
    const linkedListNodeHead = new LinkedListNode(120);
    const linkedList = new LinkedList(linkedListNodeHead);
    expect(linkedList.head).toBeDefined();
    expect(linkedList.head.value).toBe(120);
  })

  describe('prepend', () => {
    it('should add one item to the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.prependElement(120);
      expect(linkedList.head).toBeDefined();
      expect(linkedList.head.value).toBe(120);
    });

    it('should add one more item to the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.prependElement(120);
      linkedList.prependElement(114);
      expect(linkedList.head).toBeDefined();
      expect(linkedList.head.value).toBe(114);
      expect(linkedList.head.next.value).toBe(120);
    });
  })

  describe('append', () => {
    it('should add one item to the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.appendElement(120);
      expect(linkedList.head).toBeDefined();
      expect(linkedList.head.value).toBe(120);
    });

    it('should add one more item to the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.appendElement(120);
      linkedList.appendElement(114);
      linkedList.appendElement(300);
      expect(linkedList.head.next).toBeDefined();
      expect(linkedList.head.next.value).toBe(114);
      expect(linkedList.head.next.next).toBeDefined();
      expect(linkedList.head.next.next.value).toBe(300);
    });
  })

  describe('delete', () => {
    it('should delete only head when head exists', () => {
      const linkedList = new LinkedList();

      linkedList.appendElement(11);

      linkedList.deleteElement(0);

      expect(linkedList.toString()).toBe('');
    });

    it('should delete only one element inside', () => {
      const linkedList = new LinkedList();

      linkedList.appendElement(11);
      linkedList.appendElement(22);
      linkedList.appendElement(33);
      linkedList.appendElement(44);
      linkedList.appendElement(55);

      linkedList.deleteElement(3);

      expect(linkedList.toString()).toBe('11, 22, 33, 55');
    });

    it('should delete the last element', () => {
      const linkedList = new LinkedList();

      linkedList.appendElement(11);
      linkedList.appendElement(22);
      linkedList.appendElement(33);
      linkedList.appendElement(44);
      linkedList.appendElement(55);

      linkedList.deleteElement(4);

      expect(linkedList.toString()).toBe('11, 22, 33, 44');
    });

    it('should not delete element which out of scope', () => {
      const linkedList = new LinkedList();

      linkedList.appendElement(11);
      linkedList.appendElement(22);
      linkedList.appendElement(33);
      linkedList.appendElement(44);
      linkedList.appendElement(55);

      linkedList.deleteElement(8);

      expect(linkedList.toString()).toBe('11, 22, 33, 44, 55');
    });
  })

  describe('toString', () => {
    it('should show empty list', () => {
      const linkedList = new LinkedList();
      expect(linkedList.toString()).toBe('');
    });

    it('should show two elements', () => {
      const linkedList = new LinkedList();
      linkedList.appendElement(120);
      linkedList.appendElement(114);
      expect(linkedList.head).toBeDefined();
      expect(linkedList.head.value).toBe(120);
      expect(linkedList.head.next).toBeDefined();
      expect(linkedList.head.next.value).toBe(114);
      expect(linkedList.toString()).toBe('120, 114');
    });
  })

  describe('reverse', () => {
    it('should change list order', () => {
      const linkedList = new LinkedList();
      linkedList.appendElement(120);
      linkedList.appendElement(130);
      linkedList.appendElement(140);
      linkedList.appendElement(144);
      linkedList.appendElement(164);
      linkedList.reverse();

      expect(linkedList.toString()).toBe('164, 144, 140, 130, 120');
    });
  })

  describe('toArray', () => {
    it('should get array', () => {
      const linkedList = new LinkedList();
      linkedList.appendElement(120);
      linkedList.appendElement(130);
      linkedList.appendElement(140);
      linkedList.appendElement(144);
      linkedList.appendElement(164);

      expect(linkedList.toArray().join(', ')).toBe('120, 130, 140, 144, 164');
    });
  })

  describe('fromArray', () => {
    it('should make list from array', () => {
      const linkedList = new LinkedList();
      const array = [1, 2, 3, 4, 5, 6];
      linkedList.fromArray(array);

      expect(linkedList.toArray().join(', ')).toBe('1, 2, 3, 4, 5, 6');
    });
  })
});