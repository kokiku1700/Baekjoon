const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
arr.pop();
const result = arr.reduce((a, b) => a + b);

console.log(result);