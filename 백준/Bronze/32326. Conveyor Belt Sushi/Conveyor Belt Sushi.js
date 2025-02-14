const fs = require('fs');
const [r, g, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = (r * 3) + (g * 4) + (b * 5);

console.log(result);