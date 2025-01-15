const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = +input.shift();
let sum = 0;
input.sort((a, b) => b - a);

input.forEach((e, i) => {
    if ( e - i <= 0 ) sum += 0;
    else sum += e - i;
});

console.log(sum);