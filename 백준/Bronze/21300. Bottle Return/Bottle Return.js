const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const result = input.reduce((a, b) => a + b) * 5;

console.log(result);