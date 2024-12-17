const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.pop();

const result = input.reduce((a, b) => a + b);

console.log(result);