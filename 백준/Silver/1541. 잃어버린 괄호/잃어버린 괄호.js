const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('-');
let result = 0;

input.forEach((e, i) => {
    let nums = e.split('+').map(Number);
    let sum = nums.reduce((a, b) => a + b);

    if ( i === 0 ) result += sum;    
    else result -= sum;
});

console.log(result);