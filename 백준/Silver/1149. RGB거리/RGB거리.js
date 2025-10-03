const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input.slice(1).map(e => e.split(' ').map(Number));
const dp = new Array(n).fill(n).map(() => new Array(3).fill(0));

dp[0][0] = arr[0][0];
dp[0][1] = arr[0][1];
dp[0][2] = arr[0][2];

for ( let i = 1; i < n; i++ ) {
    dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(dp[n-1][0], dp[n-1][1], dp[n-1][2]));