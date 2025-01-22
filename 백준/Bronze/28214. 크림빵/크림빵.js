const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k, p] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let result = 0;

for ( let i = 0; i < n; i++ ) {
    let breads = arr.splice(0, k);
    const count = breads.filter(e => e === 0).length;

    count < p ? result++ : result;
};

console.log(result);