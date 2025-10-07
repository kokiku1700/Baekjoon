const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let max = 0;
let num = 0;

for ( let i = 0; i < k; i++ ) {
    num += arr[i];
};

max = num;

for ( let i = 1; i < arr.length; i++ ) {
    num += arr[i + k - 1] - arr[i - 1];
    if ( max < num ) max = num;
};

console.log(max);