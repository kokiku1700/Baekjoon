const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const arr = 'CAMBRIDGE'.split('');
const result = [];

input.forEach(e => {
    arr.includes(e) ? result : result.push(e);
});

console.log(result.join(''));