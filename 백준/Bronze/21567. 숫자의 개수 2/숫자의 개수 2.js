const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
const str = String(a * b * c).split('');
let map = new Map();
const result = [];

for ( let i = 0; i < 10; i++ ) {
    map.set(String(i), 0);
};

str.forEach(e => {
    map.set(e, map.get(e) + 1);
})

for ( let v of map.values() ) {
    result.push(v);
}

console.log(result.join('\n'))