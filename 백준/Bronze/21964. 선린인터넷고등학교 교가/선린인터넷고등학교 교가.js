const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(input[1].slice(-5));