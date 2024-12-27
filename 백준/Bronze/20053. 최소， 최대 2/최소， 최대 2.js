const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let result = [];

for ( let i = 0; i < n; i++ ) {
    const m = +input[i * 2];
    const nums = input[(i * 2) + 1].split(' ').map(Number);

    let maxMin = [Math.min(...nums), Math.max(...nums)];
    result.push(maxMin.join(' '));
};

console.log(result.join('\n'));