const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const str = input.shift();
let count = 0;
const m = input.shift();

input.forEach(e => {
    let strC = e + e;

    strC.includes(str) ? count++ : count;
})

console.log(count);