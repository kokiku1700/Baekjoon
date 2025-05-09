const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input.shift().split(' ').map(Number);
const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
const aticle = [{}];

input.forEach(e => {
    let [w, v] = e.split(' ').map(Number);
    aticle.push({w, v});
});

for ( let i = 1; i <= n; i++ ) {
    for ( let j = 1; j <= k; j++ ) {
        if ( aticle[i].w <= j ) {
            dp[i][j] = Math.max(aticle[i].v + dp[i - 1][j - aticle[i].w], dp[i - 1][j]);
        } else {
            dp[i][j] = dp[i - 1][j]
        };
    };
};

console.log(dp[n][k]);