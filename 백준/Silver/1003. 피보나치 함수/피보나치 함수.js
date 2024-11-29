const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();

let dp = new Array(41).fill(0).map(() => new Array(2).fill(0));
let result = [];
dp[0] = [1, 0];
dp[1] = [0, 1];

for ( let i = 2; i <= 41; i++ ) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
};

input.forEach(e => {
    result.push(dp[e].join(' '));
});

console.log(result.join('\n'))