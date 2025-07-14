const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
let count = 0;
let result = 0;

arr.forEach(e => {
    if ( e !== 0 ) {
        count++;
    } else {
        result = result >= count ? result : count;
        count = 0;
    };
});

console.log(Math.max(result, count));