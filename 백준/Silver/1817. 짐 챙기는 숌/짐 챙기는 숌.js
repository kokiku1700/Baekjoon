const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.length === 1 ? [] : input[1].split(' ').map(Number);
let box = 0;
let result = 0;

arr.forEach(e => {
    box += e;
    if ( box > m ) {
        box = 0;
        box += e;
        result++;
    };
});

if ( box > 0 ) result++;

console.log(result);