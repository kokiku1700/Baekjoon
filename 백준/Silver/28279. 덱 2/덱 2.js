const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input.shift();
let result = [];

class Node {
    constructor ( data ) {
        this.prev = null;
        this.next = null;
        this.data = data;
    };
};

class Dequeue {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    deq_unshift ( x ) {
        const node = new Node(x);

        if ( this.size === 0 ) {
            this.tail = node;
        } else if ( this.size === 1 ) {
            this.tail.prev = node;
            this.tail.next = node;
            node.prev = this.tail;
            node.next = this.tail;
        } else {
            this.tail.next = node;
            this.head.prev = node;
            node.prev = this.tail;
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    };

    deq_push ( x ) {
        const node = new Node(x);

        if ( this.size === 0 ) {
            this.head = node;
        } else if ( this.size === 1 ) {
            this.head.prev = node;
            this.head.next = node;
            node.prev = this.head;
            node.next = this.head;
        } else {
            this.head.prev = node;
            this.tail.next = node;
            node.prev = this.tail;
            node.next = this.head;
        }
        this.tail = node;
        this.size++;
    };

    deq_shift () {
        const item = this.head;

        if ( this.size === 0 ) {
            return -1; 
        } else if ( this.size === 1 ) {
            this.head = null;
            this.prev = null;
            this.size--;
            return item.data;
        } else if ( this.size === 2 ) {
            this.tail.prev = null;
            this.tail.next = null;
            this.head = this.tail;
            this.size--;
            return item.data;
        } else {
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
            this.size--;
            return item.data;
        }
    };

    deq_pop () {
        const item = this.tail;

        if ( this.size === 0 ) {
            return -1; 
        } else if ( this.size === 1 ) {
            this.head = null;
            this.prev = null;
            this.size--;
            return item.data;
        } else if ( this.size === 2 ) {
            this.head.prev = null;
            this.head.next = null;
            this.tail = this.head;
            this.size--;
            return item.data;
        } else {
            this.tail = this.tail.prev;
            this.head.prev = this.tail;
            this.tail.next = this.head;
            this.size--;
            return item.data;
        }
    };

    deq_length () {
        return this.size;
    };

    deq_empty () {
        return this.size ? 0 : 1;
    };

    deq_front () {
        return this.size ? this.head.data : -1;
    };

    deq_back () {
        return this.size ? this.tail.data : -1;
    };

};

const dequeue = new Dequeue();

for ( let i = 0; i < n; i++ ) {
    const [command, num] = input[i].split(' ').map(Number);

    switch ( command ) {
        case 1: 
            dequeue.deq_unshift(num);
            break;
        case 2:
            dequeue.deq_push(num);
            break;
        case 3:
            result.push(dequeue.deq_shift());
            break;
        case 4:
            result.push(dequeue.deq_pop());
            break;
        case 5:
            result.push(dequeue.deq_length());
            break;
        case 6: 
            result.push(dequeue.deq_empty());
            break;
        case 7: 
            result.push(dequeue.deq_front());
            break;
        case 8: 
            result.push(dequeue.deq_back());
            break;
    };
};

console.log(result.join('\n'));