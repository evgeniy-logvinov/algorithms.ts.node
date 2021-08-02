import HashFunction from "../HashFunction"
import HashTable from "../HashTable";

describe('HashFunction', () => {
  describe('getIndex', () => {
    it('should return index for value', () => {
      const hashFunction = new HashFunction();
      expect(hashFunction.getIndex('test')).toBe(8);
    })
  })
})

describe('HashTable', () => {
  describe('set', () => {
    it('should set value', () => {
      const hashTable = new HashTable<string, string>();
      const hashFunction = new HashFunction();
      hashTable.set('test', '2333');
      expect(hashTable.toStringByIndex(hashFunction.getIndex('test'))).toBe('2333');
    })

    it('should set values', () => {
      const hashTable = new HashTable<string, string>();
      const hashFunction = new HashFunction();
      hashTable.set('test', '2333');
      hashTable.set('aaaa', '4444');
      hashTable.set('cccc', '6666');
      expect(hashTable.toStringByIndex(hashFunction.getIndex('test'))).toBe('2333, 4444');
      expect(hashTable.toStringByIndex(hashFunction.getIndex('aaaa'))).toBe('2333, 4444');
      expect(hashTable.toStringByIndex(hashFunction.getIndex('cccc'))).toBe('6666');
    })
  })

  describe('delete', () => {
    it('should delete element by key', () => {
      const hashTable = new HashTable<string, string>();
      const hashFunction = new HashFunction();
      hashTable.set('test', '2333');
      hashTable.set('aaaa', '4444');
      hashTable.set('ccce', '6666');
      expect(hashTable.toStringByIndex(hashFunction.getIndex('test'))).toBe('2333, 4444, 6666');

      hashTable.delete('aaaa');
      expect(hashTable.toStringByIndex(hashFunction.getIndex('test'))).toBe('2333, 6666');
    })
  })

  describe('getValue', () => {
    it('should get value by key', () => {
      const hashTable = new HashTable<string, string>();
      hashTable.set('test', '2333');
      hashTable.set('aaaa', '4444');
      hashTable.set('cccc', '6666');
      expect(hashTable.getValue('test')).toBe('2333');
      expect(hashTable.getValue('aaaa')).toBe('4444');
      expect(hashTable.getValue('cccc')).toBe('6666');
    })
  })

  describe('toStringByIndex', () => {
    it('should get string with value by index', () => {
      const hashTable = new HashTable<string, string>();
      const hashFunction = new HashFunction();
      hashTable.set('test', '2333');
      expect(hashTable.toStringByIndex(hashFunction.getIndex('test'))).toBe('2333');
    })
  })
})