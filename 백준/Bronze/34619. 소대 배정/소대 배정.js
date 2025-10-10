const fs = require('fs');
const [a, b, n, p] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let resultA = 0;
let resultB = 0;
let count = 0;

for ( let i = 1; i <= a; i++ ) {
    for ( let j = 1; j <= b; j++ ) {
        for ( let k = 1; k <= n; k++ ) {
            count++;
            if ( count === p ) {
                resultA = i;
                resultB = j;
                break;
            }
        }
    }
}

console.log(resultA, resultB);