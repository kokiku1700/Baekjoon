const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input[0];
let DP = new Array(n + 1).fill(0);
DP[1] = input[1];

for ( let i = 2; i <= n; i++ ) {
    DP[i] = Math.max(DP[i - 1] * input[i], input[i]);
};

console.log(Math.max(...DP).toFixed(3));