const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const set = new Set(input[1].split(' ').map(Number));
const arr = input[3].split(' ').map(Number);
let result = [];

arr.forEach(e => {
    result.push(set.has(e) ? 1 : 0);
});

console.log(result.join('\n'));