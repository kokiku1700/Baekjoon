const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const avg = input.reduce((a, b) => a + b) / input.length;
let map = new Map();

input.forEach(e => {
    if ( !map.has(e) ) {
        map.set(e, 1);
    } else {
        map.set(e, map.get(e) + 1);
    };
});
let maxK = 0;
let maxV = 0;
for ( let [k, v] of map.entries()) {
    if ( v > maxV ) {
        maxV = v;
        maxK = k;
    };
};

console.log(avg + '\n' + maxK);