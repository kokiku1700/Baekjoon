const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
const result = [];

for ( let i = 1; i <= input; i++ ) {
    result.push(`Hello World, Judge ${i}!`)
};

console.log(result.join('\n'));