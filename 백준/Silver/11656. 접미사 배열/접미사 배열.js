const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
const n = input.length;
let result = [];

for ( let i = 0; i < n; i++ ) {
    result.push(input);

    input = input.split('').filter((e, idx) => idx > 0).join('');
};

console.log(result.sort().join('\n'));