const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
let count = 0;

arr.forEach((v, idx) => {
    v !== idx + 1 ? count++ : count;
});

console.log(count);