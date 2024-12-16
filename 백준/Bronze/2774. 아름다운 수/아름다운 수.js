const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = [];

input.forEach(e => {
    const arr = e.split('');
    let set = new Set(arr);

    result.push(set.size);    
});

console.log(result.join('\n'));