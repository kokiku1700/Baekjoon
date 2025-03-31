const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const player = input[1].split(' ').map(Number);
let map = new Map();

for ( let i = 1; i <= n; i++ ) {
    map.set(i, 0);
};

player.forEach(e => {
    if ( e !== 0 ) {
        map.set(e, map.get(e) + 1);
    }
});

let arr = [];
let max = Math.max(...map.values());

for ( let v of map.values() ) {
    arr.push(v);    
};

let result = arr.filter(e => e === max);

console.log(result.length > 1 ? "skipped" : arr.indexOf(max) + 1);