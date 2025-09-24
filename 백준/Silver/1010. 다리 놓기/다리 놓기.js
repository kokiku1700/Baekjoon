const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
input.shift();

input.forEach(e => {
    let dp = Array.from({ length: 30 }, () => new Array(30).fill(0));
    const [n, m] = e.split(' ').map(Number);

    function dfs (n, r) {
        if ( dp[n][r] > 0 ) return dp[n][r];
        else if ( r === 0 || n === r ) return 1;
        else return dp[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r)
    }

    result.push(dfs(m, n));
});

console.log(result.join('\n'));