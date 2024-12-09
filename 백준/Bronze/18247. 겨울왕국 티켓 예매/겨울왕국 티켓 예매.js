const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = [];

input.forEach(e => {
    const [n, m] = e.split(' ').map(Number);
    let num = 0;
    
    if ( n < 12 || m < 4 ) num = -1;
    else {
        num = (12 * m) - (m - 4);
    };

    result.push(num);
});

console.log(result.join('\n'));