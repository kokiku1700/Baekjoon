const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const times = input[1].split(' ').map(Number);
let sum = 0;
let count = 0;

for ( let i = 0; i < n; i++ ) {
    if ( sum + times[i] > t ) {
        break;
    } else {
        sum += times[i];
        count++;
    }
};

console.log(count);