const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let result = [];

input.forEach(e => {
    let arr = e.split(' ');

    for ( let i = 0; i < 2; i++ ) {
        let str = arr.shift();
        arr.push(str);
    };

    result.push(arr.join(' '));
});

console.log(result.join('\n'));