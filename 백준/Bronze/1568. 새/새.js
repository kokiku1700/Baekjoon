const fs = require('fs');
let input = +fs.readFileSync('/dev/stdin').toString().trim();
let num = 1;
let count = 0;

while ( input > 0 ) {
    if ( input < num ) {
        num = 1;
        input -= num++;
    } else {
        input -= num++;
    }
    count++;
};

console.log(count);