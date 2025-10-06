const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
let set = [...new Set([...arr].sort((a, b) => a - b))];
let map = new Map();

set.forEach((e, i) => {
    map.set(e, i);
});

const result = arr.map(e => map.get(e));

console.log(result.join(' '));