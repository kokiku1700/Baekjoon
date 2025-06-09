const fs = require('fs');
const [s1, s2, s3] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let map = new Map();
let arr = new Array(s1 * s2 * s3 + 1).fill(0);

for ( let i = 1; i <= s1; i++ ) {
    for ( let j = 1; j <= s2; j++ ) {
        for ( let k = 1; k <= s3; k++ ) {
            arr[i + j + k]++;
        };
    };
};
const max = Math.max(...arr);

console.log(arr.indexOf(max));