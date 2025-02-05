const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(Number);
let dp = new Array(n + 1).fill(1);

for ( let i = 1; i <= n; i++ ) {
    let inArr = [1];

    for ( let j = 0; j < i; j++ ) {
        if ( arr[j] < arr[i] ) {
            inArr.push(dp[j] + 1);
        }
    }
    dp[i] = Math.max(...inArr);
}

console.log(Math.max(...dp));