const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, x, k] = input.shift().split(' ').map(Number);
let location = x;

input.forEach(e => {
    let [a, b] = e.split(' ').map(Number);

    if ( a === location ) location = b;
    else if ( b === location ) location = a;
});

console.log(location);