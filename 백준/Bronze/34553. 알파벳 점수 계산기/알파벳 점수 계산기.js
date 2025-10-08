const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let result = 1;
let num = 1;

for ( let i = 1; i < input.length; i++ ) {
    if ( input[i].charCodeAt() > input[i - 1].charCodeAt() ) {
        result += ++num;
    } else {
        num = 1;
        result += num;
    };
};

console.log(result);