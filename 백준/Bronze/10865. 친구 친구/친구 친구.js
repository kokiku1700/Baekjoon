const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
let map = new Map();
let result = [];

for ( let i = 1; i <= n; i++ ) {
    map.set(i, 0);
}

for ( let i = 0; i < m; i++ ) {
    if ( m === 0 ) break;

    let friend = input[i].split(' ').map(Number);

    friend.forEach(e => {
        map.set(e, map.get(e) + 1);
    });
};

for ( let v of map.values() ) {
    result.push(v);
};

console.log(result.join('\n'));