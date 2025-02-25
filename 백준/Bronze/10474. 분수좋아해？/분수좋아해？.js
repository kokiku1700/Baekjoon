const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
let result = [];

input.forEach(e => {
    let [n, m] = e.split(' ').map(Number);
    const share = Math.floor(n / m);
    const rest = n % m;
    result.push(`${share} ${rest} / ${m}`);
});

console.log(result.join('\n'));