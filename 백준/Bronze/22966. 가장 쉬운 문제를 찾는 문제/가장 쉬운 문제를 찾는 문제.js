const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' '));
input.shift();

input.sort((a, b) => a[1] - b[1]);

console.log(input[0][0]);