const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const seq = new Array(n).fill(0);
const result = [];

function dfs ( k ) {
    const arr = [];

    if ( m === k ) {
        for ( let i = 0; i < m; i++ ) {
            arr.push(seq[i]);
        }
        
        return result.push(arr.join(' '));
    }

    for ( let i = 1; i <= n; i++ ) {
        seq[k] = i;
        dfs(k + 1);
    };
};

dfs(0);

console.log(result.join('\n'));