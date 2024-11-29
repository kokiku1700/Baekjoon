const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();

let result = input.map(e => {
    const [a, b] = e.split(' ').map(Number);

    let pow = 1;

    for ( i = 0; i < b; i++ ) {
        pow = (pow * a) % 10;
    }

    return pow === 0 ? 10 : pow;
});
console.log(result.join('\n'));