const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = BigInt(input[1].split(' ').join(''));
const b = BigInt(input[2].split(' ').join(''));



console.log(a >= b ? String(b) : String(a));