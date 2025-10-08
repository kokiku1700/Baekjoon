const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input.slice(1).map(e => e.split(' ').map(Number));
const result = new Array(n).fill(1);

for ( let i = 0; i < n; i++ ) {
    for ( let j = 0; j < n; j++ ) {
        if ( i === j )continue;

        if ( arr[i][0] > arr[j][0] && arr[i][1] > arr[j][1] ) {
            result[j]++;
        }
    };
};

console.log(result.join(' '));