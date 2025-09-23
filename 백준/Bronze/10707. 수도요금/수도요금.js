const fs = require('fs');
const [a, b, c, d, p] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const xCost = a * p;
const yCost = c >= p ? b : b + ((p - c) * d);

console.log(Math.min(xCost, yCost));