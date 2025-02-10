const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split('.'));
const n = +input.shift();
let map = new Map();
let result = [];

input.sort((a, b) => {
    if ( a[1] > b[1] ) return 1;
    if ( a[1] < b[1] ) return -1;
    else return 0;
});

for ( let i = 0; i < n; i++ ) {
    if ( !map.has(input[i][1]) ) {
        map.set(input[i][1], 1);
    } else {
        map.set(input[i][1], map.get(input[i][1]) + 1);
    }
};

for ( let [k, v] of map.entries() ) {
    result.push(`${k} ${v}`);
};

console.log(result.join('\n'));