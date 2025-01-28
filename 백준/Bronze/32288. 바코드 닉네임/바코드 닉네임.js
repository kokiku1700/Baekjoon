const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split('');
let result = [];

arr.forEach(e => {
    if ( e === e.toUpperCase() ) {
        result.push(e.toLowerCase());
    } else {
        result.push(e.toUpperCase());
    }
});

console.log(result.join(''));