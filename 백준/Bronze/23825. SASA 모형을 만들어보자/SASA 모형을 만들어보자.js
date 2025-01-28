const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const nNum = Math.floor(n / 2);
const MNum = Math.floor(m / 2);
const result = Math.min(nNum, MNum);

console.log(result);