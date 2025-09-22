const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];

input.shift();

input.forEach(e => {
    let time = e > 24 ? e % 25 + 0.5 : e + 0.5;

    if ( time >= 0 && time <= 17 ) {
        result.push("ONLINE");
    } else {
        result.push("OFFLINE");
    }
});

console.log(result.join('\n'));