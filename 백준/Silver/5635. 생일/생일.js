const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

input.sort((x, y) => {
    a = x.split(' ');
    b = y.split(' ');
    if ( a[3] === b[3] ) {
        if ( a[2] === b[2] ) {
            return a[1] - b[1];
        } else {
            return a[2] - b[2];
        }
    } else {
        return a[3] - b[3];
    }
});

const max = input[0].split(' ');
const min = input[input.length - 1].split(' ');

console.log(min[0] + "\n" + max[0]);