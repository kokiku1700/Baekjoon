const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const between = [b - a - 1, c - b - 1]

console.log(Math.max(...between));