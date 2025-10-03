const fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let count = 1;

while ( a !== b ) {
    if ( a > b ) {
        count = -1;
        break;
    } 
    if ( b % 2 === 0 ) b /= 2;
    else if ( b % 10 === 1 ) b = Math.floor(b / 10);
    else {
        count = -1;
        break;
    }
    count++;
};

console.log(count);