const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];

input.pop();

input.forEach(e => {
    const str = e.toString().split('');
    let count = str.length + 1;

    str.forEach(v => {
        if ( v === "1" ) count += 2;
        else if ( v === "0" ) count += 4;
        else count += 3;
    });
    
    result.push(count);
});

console.log(result.join('\n'));