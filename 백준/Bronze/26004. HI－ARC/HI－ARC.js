const fs = require('fs');
const [n, str] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = str.split('');
const hiarc = 'HIARC';
let map = new Map();
let result = Number.MAX_SAFE_INTEGER;

arr.forEach(e => {
    if ( hiarc.includes(e) ) {
        if ( map.has(e) ) {
            map.set(e, map.get(e) + 1);
        } else {
            map.set(e, 1);
        };
    };
});

for ( let v of map.values() ) {
    result = result > v ? v : result;
}

console.log(map.size !== 5 ? 0 : result);