const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const circle = b * 3.141592 * 2;
const quad = a * 2;

console.log(circle + quad);