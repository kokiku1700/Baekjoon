const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = 0;

input.forEach(e => {
    e[0] === "C" ? result++ : result;
});

console.log(result);