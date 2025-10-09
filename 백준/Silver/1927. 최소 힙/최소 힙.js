const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.shift();

class Heap {
    constructor () {
        this.heap = [];
    };

    size () {
        return this.heap.length;
    };

    enqueue ( data ) {
        this.heap.push(data);
        this.heapifyUp();
    };

    heapifyUp () {
        let i = this.size() - 1;
        let lastNode = this.heap[i];
        

        while ( i > 0 ) {
            let parentIndex = Math.floor((i - 1) / 2);

            if ( this.heap[parentIndex] > lastNode ) {
                this.heap[i] = this.heap[parentIndex];
                i = parentIndex;
            } else {
                break;
            }
        }
        this.heap[i] = lastNode;
    };

    dequeue () {
        if ( this.size() === 0 ) return 0;
        if ( this.size() === 1 ) return this.heap.pop();

        const rootNode = this.heap[0];
        const lastNode = this.heap.pop();

        this.heap[0] = lastNode;
        this.heapifyDown();

        return rootNode;
    };

    heapifyDown () {
        let i = 0; 
        let swapIndex = null;
        
        while ( true ) {
            let leftChildIndex = i * 2 + 1;
            let rightChildIndex = i * 2 + 2;

            if ( leftChildIndex < this.size() ) {
                if ( this.heap[leftChildIndex] < this.heap[i] ) {
                    swapIndex = leftChildIndex;
                }
            }

            if ( rightChildIndex < this.size() ) {
                if ( (swapIndex === null && this.heap[i] > this.heap[rightChildIndex])
                    || (swapIndex !== null && this.heap[leftChildIndex] > this.heap[rightChildIndex])
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if ( swapIndex === null ) break;

            [this.heap[i], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[i]];
            i = swapIndex;
            swapIndex = null;
        };
    };
};

let heap = new Heap();
let result = [];

input.forEach(e => {
    if ( e === 0 ) result.push(heap.dequeue());
    else heap.enqueue(e);
});

console.log(result.join('\n'));