const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input.shift();
let max = 0;

input.sort((a, b) => b - a);

for ( let i = n - 1; i >= 0; i-- ) {
    let num = input[i] * input.length;
    max = max < num ? num : max; 
    input.pop();
};

console.log(max);