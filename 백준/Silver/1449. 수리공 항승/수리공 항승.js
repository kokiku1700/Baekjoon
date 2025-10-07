const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, l] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let range = arr[0] - 0.5 + l;
let count = 1;

for ( let i = 1; i < n; i++ ) {
    if ( arr[i] + 0.5 > range ) {
        range = arr[i] + l - 0.5;
        count++;
    }
};

console.log(count);