const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));

function dfs ( n, r ) {
    if ( dp[n][r] > 0 ) return dp[n][r];
    else if ( r === 0 || n === r ) return dp[n][r] = 1;
    else return dp[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r);
}

dfs(n, k);

console.log(dp[n][k]);