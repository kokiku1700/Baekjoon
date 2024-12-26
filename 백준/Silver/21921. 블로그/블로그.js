const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, x] = input[0].split(' ').map(Number);
const visitors = input[1].split(' ').map(Number);
let num = visitors.slice(0, x).reduce((a, b) => a + b);
let max = 0;
let count = 0;

for ( let i = 0; i <= n - x; i++ ) {
    if ( max < num ) {
        max = num;
        count = 1;
    } else if ( max === num ) {
        count++;
    }
    num = num - visitors[i] + visitors[i + x];
};

console.log(max === 0 ? "SAD" : max + '\n' + count);