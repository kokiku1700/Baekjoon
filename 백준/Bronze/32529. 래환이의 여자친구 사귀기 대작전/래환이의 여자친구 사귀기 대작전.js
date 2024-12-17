const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let sum = 0;
let result = 0;

for ( let i = n - 1; i >= 0; i-- ) {
    sum += arr[i];

    if ( sum >= m ) {
        result = i + 1;
        break;
    }
}; 

console.log(result === 0 ? -1 : result);