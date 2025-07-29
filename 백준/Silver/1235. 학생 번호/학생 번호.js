const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let count = 1;
let set = new Set();

for ( let i = 0; i < input[0].length; i++ ) {
    set.clear();

    input.forEach(e => {
        set.add(Number(e.slice(e.length - count)));
    });

    count++;

    if ( set.size === n ) break;
}

console.log(count - 1);