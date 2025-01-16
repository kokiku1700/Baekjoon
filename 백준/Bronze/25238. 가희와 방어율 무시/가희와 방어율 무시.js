const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const feel = a - (a * (b / 100));
const result = feel < 100 ? 1 : 0;

console.log(result)