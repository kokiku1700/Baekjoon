const fs = require('fs');
const [n, m, k] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const num = m / n;

console.log( num * k );