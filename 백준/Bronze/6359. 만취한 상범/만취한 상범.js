const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
const result = [];

input.forEach(e => {
    const arr = new Array(e + 1).fill(true);
    
    for ( let i = 2; i <= e; i++ ) {
        for ( let j = 1; j <= e; j++ ) {
            if ( arr[i * j] === true ) arr[i * j] = false;
            else if ( arr[i * j] === false ) arr[i * j] = true;
        }
    };
    const count = arr.filter(v => v === true).length;
    result.push(count - 1);
});

console.log(result.join('\n'));