const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const avg = input.pop();
let count = 0;

while ( true ) {
    let sum = input.reduce((a, b) => a + b);

    if ( sum / 4 < avg ) {
        input[0]++;
        count++;
    } else {
        break;
    }
};

console.log(count);