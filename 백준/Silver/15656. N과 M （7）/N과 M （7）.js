const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const numArr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const seq = new Array(m).fill(0);
const result = [];

function dfs (k) {
    const arr = [];

    if ( k === m ) {
        for ( let i = 0; i < m; i++ ) {
            arr.push(seq[i]);
        }

        return result.push(arr.join(' '));
    };

    for ( let i = 0; i < n; i++ ) {
        seq[k] = numArr[i];
        dfs(k + 1);
    };
};

dfs(0);

console.log(result.join('\n'));