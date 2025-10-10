const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = +input.shift();
const result = [];
const arr = new Array(n).fill(0).map((_, i) => i + 1);
let count = 0;

class Node {
    constructor ( data ) {
        this.data = data;
        this.next = null;
        this.prev = null;
    };
};

class Stack {
    constructor (  ) {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push ( data ) {
        const node = new Node(data);

        if ( this.size === 0 ) {
            this.head = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
        }

        this.tail = node;
        this.size++;

        return "+";
    };

    pop () {
        if ( this.size === 0 ) return;

        if ( this.size === 1 ) {
            this.head = null;
            this.tail = null;
        } else if ( this.size >= 2) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;

        return "-";
    };
};

let stack = new Stack();

input.forEach(e => {
    while ( count < arr.length ) {
        if ( stack.tail && stack.tail.data === e ) {
            result.push(stack.pop());
            break;
        } else {
            result.push(stack.push(arr[count]));
            count++;
        }
    };

    if ( count === arr.length ) {
        if ( stack.tail && stack.tail.data === e ) {
            result.push(stack.pop());
        }
    }
});

console.log(stack.size > 0 ? "NO" : result.join('\n'));