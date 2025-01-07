const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let dp = new Array(n).fill(0);

for ( let i = 0; i < n; i++ ) {
    const [duration, profit] = input[i].split(' ').map(Number);
    if ( duration + i > n ) continue;

    dp[i] += profit;

    for ( let j = i + duration; j < n; j++ ) {
        dp[j] = Math.max(dp[i], dp[j]);
    }
};

console.log(Math.max(...dp));