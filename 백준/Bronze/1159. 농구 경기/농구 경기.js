const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let map = new Map();
let result = [];

input.forEach(e => {
    if ( map.has(e[0]) ) {
        map.set(e[0], map.get(e[0]) + 1);
    } else {
        map.set(e[0], 1);
    }
});

map.forEach((v, k) => {
    v >= 5 ? result.push(k) : 0;
})

console.log(result.length ? result.sort().join('') : "PREDAJA");