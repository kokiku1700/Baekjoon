const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, w, h] = input.shift().split(' ').map(Number);
let result = [];

input.forEach(e => {
    w**2 + h**2 >= e**2 ? result.push("DA") : result.push("NE"); 
});

console.log(result.join('\n'));