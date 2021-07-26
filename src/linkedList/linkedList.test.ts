import LinkedListNode from './LinkedListNode';

describe('Node tests', () => {
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
