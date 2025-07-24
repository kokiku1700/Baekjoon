const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
let result = [];

input.forEach(e => {
    let nums = [];

    for ( let i = 1; i <= Math.sqrt(e); i++ ) {
        if ( e % i === 0 ) {
            nums.push(i);
            nums.push(e / i);
            if ( e / i === i ) {
                nums.pop();
            };
        };
    };
    result.push([e, nums.length].join(' '));
})

console.log(result.join('\n'));