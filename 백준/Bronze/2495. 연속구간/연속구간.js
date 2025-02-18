const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];

input.forEach(e => {
    const arr = e.split('').map(Number);
    let dp = new Array(8).fill(1);
    
    for ( let i = 1; i < 8; i++ ) {
        dp[i] = arr[i - 1] === arr[i] ? dp[i - 1] + 1 : 1;
    }

    result.push(Math.max(...dp));
});

console.log(result.join('\n'));