const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = [];

input.forEach(e => {
    const [candys, num] = e.split(' ').map(Number);
    const quot = Math.floor(candys / num);
    const rest = candys % num;

    result.push(`You get ${quot} piece(s) and your dad gets ${rest} piece(s).`)
});

console.log(result.join('\n'));