const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
let bin = input.toString(2).split('').map(Number);
let count = 0;

bin.forEach(e => {
    e === 1 ? count++ : false;
});

console.log(count);