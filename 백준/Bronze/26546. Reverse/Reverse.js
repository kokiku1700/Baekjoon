const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = [];

input.forEach(e => {
    let [str, n, m] = e.split(" ");
    let arr = str.split('')
    
    arr.splice(n, m - n);
    result.push(arr.join(''));
});

console.log(result.join('\n'));