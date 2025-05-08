const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let newArr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let arr = new Array(n).fill(0);
arr[0] = newArr[0];

for ( let i = 1; i < n; i++ ) {
    arr[i] = newArr[i] + arr[i - 1];
}

let result = arr.reduce((a, b) => a + b);
console.log(result)