const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
let count = 0;

for ( let i = 1; i <= Math.sqrt(input); i++ ) {
    if ( input % i === 0 ) {
        count++;
        if ( input / i !== i ) count++;
    }; 
};

console.log(count);