const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
let result = 0;

for ( let i = 0; i < 31; i++ ) {
    if ( Math.pow(2, i) === input ) {
        result = 1;
        break;
    }
}
console.log(result);