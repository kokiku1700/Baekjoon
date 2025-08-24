const fs = require('fs');
const [n, m, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const resultN = Math.floor(k / m);
const ResultM = k % m;

console.log(resultN, ResultM);