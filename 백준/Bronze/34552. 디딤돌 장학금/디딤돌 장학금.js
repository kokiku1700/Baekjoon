const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.shift().split(' ').map(Number);
const n = +input.shift();
let result = 0;

input.forEach(e => {
    const [b, l, s] = e.split(' ').map(Number);

    if ( l >= 2 && s >= 17 ) {
        result += arr[b];
    };
});

console.log(result);