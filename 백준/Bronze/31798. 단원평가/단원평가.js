const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = 0;

if ( a === 0 ) {
    result = (c ** 2) - b;
} else if ( b === 0 ) {
    result = (c ** 2) - a;
} else {
    result = Math.sqrt(a + b);
}

console.log(result);