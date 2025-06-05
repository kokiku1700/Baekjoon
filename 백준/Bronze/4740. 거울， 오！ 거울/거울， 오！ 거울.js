const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];
input.pop();

input.forEach(e => {
    let arr = e.split('').reverse();
    result.push(arr.join(''));
});

console.log(result.join('\n'));