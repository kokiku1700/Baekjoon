const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[0].split('');
arr[arr.length - 1] = 0;
arr[arr.length - 2] = 0;
let num = +arr.join('');
const n = input[1];

while ( num % n !== 0 ) {
    num++;
};

const result = num.toString().split('').splice(-2, 2).join('');

console.log(result.length === 2 ? result : "0" + result);