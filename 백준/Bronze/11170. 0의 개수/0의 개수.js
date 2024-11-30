const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input.shift();
let result = [];

for ( let i = 0; i < n; i++ ) {
    let [x, y] = input[i].split(' ').map(Number);
    let count = 0;
    
    for ( let j = x; j <= y; j++ ) {
        let str = j.toString().split('').filter(e => e === "0");

        count += str.length;
    }

    result.push(count);
};

console.log(result.join('\n'));