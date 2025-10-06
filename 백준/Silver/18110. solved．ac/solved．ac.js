const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const n = +input.shift();
const avg = Math.round(n * (15 / 100));

input.sort((a, b) => a - b);

const arr = input.slice(avg, input.length - avg);
const result = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);

console.log(n === 0 ? 0 : result);