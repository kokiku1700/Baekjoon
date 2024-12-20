const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const mul = n * m;
let arr = [];
let result = [];

for ( let i = 1; i <= mul; i++ ) {
    if ( i % m === 0 ) {
        arr.push(i);
        result.push(arr.join(' '));
        arr = [];
    } else {
        arr.push(i);
    }
};

console.log(result.join('\n'));