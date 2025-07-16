const fs = require('fs');
const [x, y] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const xRe = +'1'.repeat(x);
const yRe = +'1'.repeat(y);

console.log(xRe + yRe);