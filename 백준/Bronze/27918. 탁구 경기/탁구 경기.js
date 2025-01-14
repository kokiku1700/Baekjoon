const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input.shift();
let D = 0;
let P = 0;

for ( let i = 0; i < n; i++ ) {
    input[i] === "D" ? D++ : P++;
    if ( Math.abs(D - P) === 2 ) break;
};

console.log(`${D}:${P}`);