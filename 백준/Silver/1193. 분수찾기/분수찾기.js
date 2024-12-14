const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
let n = 1;
let last = 1;

while ( last < input ) {
    last += n + 1;
    n++;
};

const a = n - (last - input);
const b = n - a + 1;

console.log(n % 2 === 0 ? `${a}/${b}` : `${b}/${a}`);