const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

console.log(Math.sqrt(input * 2) * 4);