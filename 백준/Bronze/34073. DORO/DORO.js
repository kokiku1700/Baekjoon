const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ');
const result = [];

arr.forEach(e => {
    result.push(e.concat("DORO"));
});

console.log(result.join(' '));