const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let n = input[0];
let DP = new Array(11).fill(0);
DP[1] = 1;
DP[2] = 2;
DP[3] = 4;
let result = [];

for ( let i = 4; i <= 11; i++ ) {
    DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
}

for ( let i = 1; i <= n; i++ ) {
    result.push(DP[input[i]]);
}

console.log(result.join('\n'));