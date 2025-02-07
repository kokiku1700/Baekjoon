const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const m = +input[2];
const Aarr = input[1].split(' ').map(Number);
const Xarr = input[3].split(' ').map(Number);
let set = new Set(Aarr);
let result = [];

Xarr.forEach(e => {
    if (set.has(e)) result.push(1);
    else result.push(0);
});

console.log(result.join('\n'));