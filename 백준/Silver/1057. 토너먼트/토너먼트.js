const fs = require('fs');
let [n, kim, lim] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const tournament = new Array(n).fill(0).map((e, i) => e = i + 1);
let count = 0;

while ( kim !== lim ) {
    kim = parseInt(kim / 2 + kim % 2);
    lim = parseInt(lim / 2 + lim % 2);
    count++;
}

console.log(count);