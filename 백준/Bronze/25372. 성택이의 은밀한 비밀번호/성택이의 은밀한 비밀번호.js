const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];
input.shift();

input.forEach(e => {
    if ( e.length >= 6 && e.length <= 9 ) {
        result.push("yes");
    } else {
        result.push("no");
    }
});

console.log(result.join('\n'));