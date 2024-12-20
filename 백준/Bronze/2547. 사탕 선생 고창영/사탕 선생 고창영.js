const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let result = [];

for ( let i = 0; i < n; i++ ) {
    input.shift();
    const m = +input.shift();
    const arr = input.splice(0, m).map(BigInt);
    const sum = arr.reduce((a, b) => a + b);

    result.push(sum % BigInt(m) === 0n ? "YES" : "NO");
};

console.log(result.join('\n'));