const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = [];

input.forEach(e => {
    const arr = e.split(' ').map(Number);
    const newArr = arr.filter(v => v % 2 === 0);
    const sum = newArr.reduce((a, b) => a + b);
    const min = Math.min(...newArr);

    result.push([sum, min].join(' '));
});

console.log(result.join('\n'));