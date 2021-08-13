import Heap from "../Heap";

describe('Heap', () => {
  describe('add', () => {
    describe('max', () => {
      it('should add new element to the heap', () => {
        const heap = new Heap();

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
  })
  describe('remove', () => {
    describe('max', () => {
      it('should remove head value and move index from the last to head', () => {
        const heap = new Heap();
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

        heap.remove();

        //                  233
        //           200           133
        //        66    44      88   12
        //    22
        expect(heap.toArray()).toEqual([233, 200, 133, 66, 44, 88, 12, 22]);

        //                200
        //           66           133
        //        22    44      88   12
        heap.remove();

        expect(heap.toArray()).toEqual([200, 66, 133, 22, 44, 88, 12]);
      })
    })
  })
})