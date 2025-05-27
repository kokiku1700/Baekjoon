const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = -1;
input.shift();

input.forEach(e => {
    let [a, b, c] = e.split(' ').map(Number);
    if ( a + b + c >= 512 ) {
        if ( result !== -1 ) result = Math.min(a + b + c, result);
        else result = a + b + c;
    }
});

console.log(result);