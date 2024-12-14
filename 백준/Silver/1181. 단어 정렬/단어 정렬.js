const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let set = new Set(input);
let newArr = Array.from(set);
newArr.sort().sort((a, b) => a.length - b.length);

console.log(newArr.join('\n'));