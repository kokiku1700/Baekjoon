const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);
let DP = new Array(n + 1).fill(0);

for ( let i = 1; i <= n; i++ ) {
    DP[i] = Math.max(DP[i - 1] + arr[i - 1], arr[i - 1]);
};
DP.shift();
console.log(Math.max(...DP));