import Heap from "../Heap";
import HeapMax from "../HeapMax";
import HeapMin from "../HeapMin";

describe('Heap', () => {
  describe('add', () => {
    describe('max', () => {
      it('should add new element to the heap', () => {
        const heap = new HeapMax();

        //       56

        heap.add(56);

        expect(heap.toArray()).toEqual([56]);

        //       56
        //   33
        heap.add(33);

        expect(heap.toArray()).toEqual([56, 33]);

        //       56
        //   33      23
        heap.add(23);

        expect(heap.toArray()).toEqual([56, 33, 23]);

        //       88
        //   56      23
        // 33
        heap.add(88);

        expect(heap.toArray()).toEqual([88, 56, 23, 33])

        //       88
        //   66      23
        // 33  56
        heap.add(66);

        expect(heap.toArray()).toEqual([88, 66, 23, 33, 56])
      })
    })

    describe('min', () => {
      it('should add new element to the heap', () => {
        const heap = new HeapMin();
        heap.add(88);

        //  88
        expect(heap.toArray()).toEqual([88]);

        heap.add(22);

        //    22
        // 88
        expect(heap.toArray()).toEqual([22, 88]);

        //     22
        // 88      233
        heap.add(233);

        expect(heap.toArray()).toEqual([22, 88, 233]);

        //        22
        //    44      233
        // 88
        heap.add(44);

        expect(heap.toArray()).toEqual([22, 44, 233, 88]);

        //        22
        //    44      233
        // 88   66
        heap.add(66);

        expect(heap.toArray()).toEqual([22, 44, 233, 88, 66]);

        //        22
        //    44      233
        // 88   66  300
        heap.add(300);
        expect(heap.toArray()).toEqual([22, 44, 233, 88, 66, 300]);

        //            22
        //      44          133
        //    88   66    300   233
        heap.add(133);
        expect(heap.toArray()).toEqual([22, 44, 133, 88, 66, 300, 233]);

        //            12
        //      22          233
        //    44   66    300   133
        // 88
        heap.add(12);
        expect(heap.toArray()).toEqual([12, 22, 133, 44, 66, 300, 233, 88]);

        //            12
        //      22          233
        //    44   66    300   133
        // 88
        heap.add(88);
        expect(heap.toArray()).toEqual([12, 22, 133, 44, 66, 300, 233, 88, 88]);
      })
    })
  })

  describe('poll', () => {
    describe('max', () => {
      it('should remove head value and move index from the last to head', () => {
        const heap = new HeapMax();
        expect(heap.poll()).toBeNull();
      })

      it('should remove head value and move index from the last to head', () => {
        const heap = new HeapMax();
        heap.add(88);
        heap.add(22);
        heap.add(233);
        heap.add(44);
        heap.add(66);
        heap.add(300);
        heap.add(133);
        heap.add(200);
        heap.add(12);
        //                  300
        //           200           233
        //        66    44      88   133
        //    22    12

        expect(heap.toArray()).toEqual([300, 200, 233, 66, 44, 88, 133, 22, 12]);

        expect(heap.poll()).toBe(300);

        //                  233
        //           200           133
        //        66    44      88   12
        //    22
        expect(heap.toArray()).toEqual([233, 200, 133, 66, 44, 88, 12, 22]);

        //                200
        //           66           133
        //        22    44      88   12
        expect(heap.poll()).toBe(233);

        expect(heap.toArray()).toEqual([200, 66, 133, 22, 44, 88, 12]);
      })
    })

    describe('min', () => {
      it('should remove head value and move index from the last to head', () => {
        const heap = new HeapMin();
        expect(heap.poll()).toBeNull();
      })

      it('should remove head value and move index from the last to head', () => {
        const heap = new HeapMin();
        heap.add(88);
        heap.add(22);
        heap.add(233);
        heap.add(44);
        heap.add(66);
        heap.add(300);
        heap.add(133);
        heap.add(12);
        heap.add(88);

        //                  12
        //           22              133
        //       44     66      300     233
        //   88     88

        expect(heap.toArray()).toEqual([12, 22, 133, 44, 66, 300, 233, 88, 88]);

        expect(heap.poll()).toBe(12);

        //                  22
        //           44              133
        //       88     66      300     233
        //   88
        expect(heap.toArray()).toEqual([22, 44, 133, 88, 66, 300, 233, 88]);

        // //                  44
        // //           66              133
        // //       88     88      300     233
        expect(heap.poll()).toBe(22);

        expect(heap.toArray()).toEqual([44, 66, 133, 88, 88, 300, 233]);
      })
    })
  })

  describe('peek', () => {
    describe('max', () => {
      it('should get head', () => {
        const heap = new HeapMax();
        heap.add(23);
        heap.add(44);
        heap.add(55);

        expect(heap.peek()).toBe(55);
      })

      it('should get null for empty heap', () => {
        const heap = new Heap();

        expect(heap.peek()).toBeNull();
      })
    })

    describe('min', () => {
      it('should get head', () => {
        const heap = new HeapMin();
        heap.add(23);
        heap.add(44);
        heap.add(55);

        expect(heap.peek()).toBe(23);
      })
    })
  })

  describe('find', () => {
    describe('max', () => {
      it('should find indexes of elements in the heap', () => {
        const heap = new HeapMax();
        heap.add(88);
        heap.add(22);
        heap.add(233);
        heap.add(44);
        heap.add(66);
        heap.add(300);
        heap.add(133);
        heap.add(200);
        heap.add(12);
        heap.add(88);

        //                  300
        //           200           233
        //       66     88      88   133
        //    22   12  44

        expect(heap.find(300)).toEqual([0]);
        expect(heap.find(88)).toEqual([4, 5]);
        expect(heap.find(12)).toEqual([8]);
        expect(heap.find(9999)).toEqual([]);
      })
    })

    describe('min', () => {
      it('should find indexes of elements in the heap', () => {
        const heap = new HeapMin();
        heap.add(88);
        heap.add(22);
        heap.add(233);
        heap.add(44);
        heap.add(66);
        heap.add(300);
        heap.add(133);
        heap.add(12);
        heap.add(88);

        //                  12
        //           22              133
        //       44     66      300     233
        //   88     88

        expect(heap.toArray()).toEqual([12, 22, 133, 44, 66, 300, 233, 88, 88]);

        expect(heap.find(300)).toEqual([5]);
        expect(heap.find(88)).toEqual([7, 8]);
        expect(heap.find(12)).toEqual([0]);
        expect(heap.find(9999)).toEqual([]);
      })
    })
  })

  describe('remove', () => {
    describe('max', () => {
      it('should remove values', () => {
        const heap = new HeapMax();

        heap.add(88);
        heap.add(22);
        heap.add(233);
        heap.add(44);
        heap.add(66);
        heap.add(300);
        heap.add(133);
        heap.add(200);
        heap.add(12);
        heap.add(88);

        //                  300
        //           200           233
        //       66      88      88     133
        //    22   12  44

        heap.remove(233);

        //                  300
        //           200           133
        //       66     88      88     44
        //    22   12

        expect(heap.toArray()).toEqual([300, 200, 133, 66, 88, 88, 44, 22, 12])

        heap.remove(88);

        //                  300
        //           200           133
        //       66     22      12     44

        expect(heap.toArray()).toEqual([300, 200, 133, 66, 22, 12, 44])
      })
    })

    describe('min', () => {
      it('should remove values', () => {
        const heap = new HeapMin();

        heap.add(88);
        heap.add(22);
        heap.add(233);
        heap.add(44);
        heap.add(66);
        heap.add(300);
        heap.add(133);
        heap.add(12);
        heap.add(88);

        //                  12
        //           22              133
        //       44     66      300     233
        //   88     88

        expect(heap.toArray()).toEqual([12, 22, 133, 44, 66, 300, 233, 88, 88])

        heap.remove(233);
        //                  12
        //           22              88
        //       44     66      300     133
        //   88

        expect(heap.toArray()).toEqual([12, 22, 88, 44, 66, 300, 133, 88])

        heap.remove(88);

        //                  12
        //           22              133
        //       44     66      300
        expect(heap.toArray()).toEqual([12, 22, 133, 44, 66, 300])
      })
    })

    it('should remove nothing for empty heap or value not from heap', () => {
      const heap = new Heap();
      heap.add(44)

      heap.remove(22);
      expect(heap.toArray()).toEqual([44]);

      heap.remove(44);
      expect(heap.toArray()).toEqual([]);

      heap.remove(44);
      expect(heap.toArray()).toEqual([]);
    })
  })
})