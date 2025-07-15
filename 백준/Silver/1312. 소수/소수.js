const fs = require('fs');
let [a, b, n] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = 0;

for ( let i = 0; i <= n; i++ ) {
    result = Math.floor(a / b);
    a = a % b * 10
};

console.log(result);