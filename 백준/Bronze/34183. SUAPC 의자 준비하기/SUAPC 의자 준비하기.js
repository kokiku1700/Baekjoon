const fs = require('fs');
const [n, m, a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const result = (((n * 3) - m) * a) + b;

console.log((n * 3) - m  > 0 ? result : 0);