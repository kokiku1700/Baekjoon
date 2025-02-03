const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const purposePage = input[1].split(' ').map(Number);
const page = input[2].split(' ').map(Number);
let count = 0;

for ( let i = 0; i < n; i++ ) {
    purposePage[i] <= page[i] ? count++ : count;
};

console.log(count);