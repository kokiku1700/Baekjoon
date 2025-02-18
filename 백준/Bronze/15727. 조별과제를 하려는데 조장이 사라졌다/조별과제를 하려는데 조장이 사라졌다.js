const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
const result = Math.ceil(input / 5);

console.log(result);