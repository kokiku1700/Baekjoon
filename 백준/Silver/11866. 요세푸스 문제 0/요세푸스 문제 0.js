const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let arr = [];
let result = [];
let count = 0;

for ( let i = 1; i <= n; i++ ) {
    arr.push(i);
};

while ( arr.length > 0 ) {
    for ( let i = 1; i < k; i++ ) {
        let temp = arr.shift();
        arr.push(temp);
    }
    result.push(arr.shift());
}

console.log(`<${result.join(', ')}>`);