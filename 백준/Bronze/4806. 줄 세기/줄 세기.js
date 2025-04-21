const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;

input.forEach(e => {
    e === "" ? count : count++;
});

console.log(count);