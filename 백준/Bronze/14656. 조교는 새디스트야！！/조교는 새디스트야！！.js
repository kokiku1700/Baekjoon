const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number).filter((v, idx) => v !== idx + 1);


console.log(arr.length);