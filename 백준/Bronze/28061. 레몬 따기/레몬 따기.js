const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = 0;
const trees = input[1].split(' ').map(Number);

trees.forEach(e => {
    if ( result <= e ) {
        result = e;
    } else {
        result--;
    };
});

console.log(result - 1);