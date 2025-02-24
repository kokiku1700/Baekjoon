const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
let result = [];

input.forEach(e => {
    let n = (e * 80 / 100).toFixed(2);

    result.push("$" + n);
});

console.log(result.join('\n'));