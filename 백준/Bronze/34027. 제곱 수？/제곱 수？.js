const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const result = [];

input.forEach(e => {
    let n = Math.sqrt(e);
    result.push(Number.isInteger(n) ? 1 : 0);
});

console.log(result.join('\n'));