const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ').sort((a, b) => a - b);

console.log(arr[0] * arr[arr.length - 1]);