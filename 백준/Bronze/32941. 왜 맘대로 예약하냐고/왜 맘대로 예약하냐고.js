const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [t, x] = input.shift().split(' ').map(Number);
const n = +input.shift();
let result = "YES";

for ( let i = 0; i < n; i++ ) {
    const arr = input[(i * 0) + 1].split(' ').map(Number);

    if ( !arr.includes(x) ) {
        result = "NO";
        break;
    };
};

console.log(result);