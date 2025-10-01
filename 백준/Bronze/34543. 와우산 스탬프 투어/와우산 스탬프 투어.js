const fs = require('fs');
const [n, w] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = 0;

if ( n === 5 ) {
    result = (n * 10) + 20 + 50;
} else if ( n < 3 ) {
    result = n * 10;
} else {
    result = (n * 10) + 20;
};

result = w > 1000 ? result - 15 : result;

console.log(result < 0 ? 0 : result);