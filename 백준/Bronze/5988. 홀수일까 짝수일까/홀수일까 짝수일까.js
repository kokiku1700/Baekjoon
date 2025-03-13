const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
let result = [];

arr.forEach(e => {
    result.push(e % 2n === 0n ? 'even' : 'odd'); 
});

console.log(result.join('\n'));