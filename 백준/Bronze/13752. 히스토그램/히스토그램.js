const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const histogram = "=";
let result = [];

for ( let i = 0; i < n; i++ ) {
    result.push(histogram.repeat(arr[i]));
};

console.log(result.join('\n'));