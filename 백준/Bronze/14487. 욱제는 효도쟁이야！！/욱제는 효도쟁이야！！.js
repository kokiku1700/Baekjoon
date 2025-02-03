const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
const sum = arr.reduce((a, b) => a + b);
const max = Math.max(...arr);

console.log(sum - max);