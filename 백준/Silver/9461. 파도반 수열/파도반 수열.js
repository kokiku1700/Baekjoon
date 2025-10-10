const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.shift();

const max = Math.max(...input);
const DP = new Array(max + 1).fill(0);
const result = [];

DP[1] = 1;
DP[2] = 1;

for ( let i = 3; i <= max; i++ ) {
    DP[i] = DP[i - 2] + DP[i - 3];
};

input.forEach(e => {
    result.push(DP[e]);
});

console.log(result.join('\n'));