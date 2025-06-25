const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let map = new Map();
let count = 0;

input.forEach(e => {
    const [cow, roc] = e.split(' ').map(Number);

    if ( map.has(cow) ) {
        if ( map.get(cow) !== roc ) {
            map.set(cow, roc);
            count++;
        }
    } else {
        map.set(cow, roc);
    }
});

console.log(count);