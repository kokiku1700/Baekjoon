const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let arrA = input[1].split(' ').map(Number).sort((a, b) => a - b);
let arrB = input[2].split(' ').map(Number).sort((a, b) => b - a);
let arr = [];

for ( let i = 0; i < n; i++ ) {
    arr.push(arrA[i] * arrB[i]);
}

let result = arr.reduce((a, b) => a + b);

console.log(result);