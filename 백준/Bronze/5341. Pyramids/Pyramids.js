const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.pop();
const result = [];

input.forEach(e => {
    result.push((e * (e + 1)) / 2);
});

console.log(result.join('\n'));