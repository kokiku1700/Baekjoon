const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);
let max = Math.max(...arr);
let min = 1;
while ( min <= max ) {
    let mid = parseInt((max + min) / 2);

    let p = arr.map(e => {
        return parseInt(e / mid);
    }).reduce((a, b) => a + b);

    if ( p >= n ) {
        min = mid + 1;
    } else {
        max = mid - 1;
    }
}

console.log(max);