const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;

for ( let i = 0; i < 8; i++ ) {
    const arr = input[i].split('');
    for ( let j = 0; j < 8; j++ ) {
        if ( i % 2 === 0 ) {
            if ( j % 2 === 0 ) {
                arr[j] === "F" ? count++ : count;
            }
        } else {
            if ( j % 2 !== 0 ) {
                arr[j] === "F" ? count++ : count;
            }
        }
    }
}

console.log(count)