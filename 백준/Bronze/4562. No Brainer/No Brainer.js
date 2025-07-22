const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const result = [];

input.forEach(e => {
    let [a, b] = e.split(' ').map(Number);

    result.push(a >= b ? "MMM BRAINS" : "NO BRAINS");
});

console.log(result.join("\n"));