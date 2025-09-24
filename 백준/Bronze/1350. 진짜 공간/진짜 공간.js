const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const files = input[1].split(' ').map(Number);
const cluster = +input[2];
let count = 0;

files.forEach(e => {
    if ( e > cluster ) count += Math.ceil(e / cluster);
    else if ( e === 0 ) count;
    else count++;
});

console.log(cluster * count);