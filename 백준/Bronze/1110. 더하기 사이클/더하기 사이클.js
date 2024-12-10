const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(Number);
let sum = input.reduce((a, b) => a + b).toString().split('');
let strSum = input[input.length - 1] + sum[sum.length - 1];
let count = 1;

while ( Number(input.join('')) !== Number(strSum) ) {
    sum = strSum.split('').map(Number).reduce((a, b) => a + b).toString().split('');
    strSum = strSum[strSum.length - 1] + sum[sum.length - 1];
    count++;
}

console.log(count)