const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const result = c % 2 === 0 ? a : a ^ b;

console.log(result);