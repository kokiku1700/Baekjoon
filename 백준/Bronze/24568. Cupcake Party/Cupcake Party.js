const fs = require('fs');
const [r, s] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const sum = (r * 8) + (s * 3);
const result = sum - 28 > 0 ? sum - 28 : 0; 

console.log(result);