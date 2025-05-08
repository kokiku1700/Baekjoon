const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
let acc = 0;
let result = 0;

arr.sort((a, b) => a - b);

arr.forEach(e => {
    acc += e;
    result += acc;
});

console.log(result);