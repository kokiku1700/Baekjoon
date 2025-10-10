const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = +input[0];
let arr = new Array(n + 1).fill(0);
arr[1] = input[1];
arr[2] = arr[1] + input[2];

for ( let i = 3; i <= n; i++ ) {
    arr[i] = Math.max(arr[i - 3] + input[i - 1] + input[i], arr[i - 2] + input[i]);
};

console.log(arr[n]);