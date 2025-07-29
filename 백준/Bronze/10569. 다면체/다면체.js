const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const result = [];

input.forEach(el => {
    const [v, e] = el.split(' ').map(Number);

    result.push(Math.abs(v - e - 2));
});

console.log(result.join('\n'));