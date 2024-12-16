const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let result = [];

for ( let i = 0; i < n; i++ ) {
    const [m, k] = input[i * 2].split(' ').map(Number);
    const candys = input[i * 2 + 1].split(' ').map(Number);
    let sum = 0;

    candys.forEach(e => {
        sum += Math.floor(e / k);
    });

    result.push(sum);
};

console.log(result.join('\n'));