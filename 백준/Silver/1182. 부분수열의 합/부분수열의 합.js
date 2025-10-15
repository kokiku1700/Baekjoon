const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let count = 0;

function dfs ( i, sum ) {
    if ( i === n ) {
        if ( sum === s ) {
            count++;
        }
        return;
    }
    
    dfs(i + 1, sum + arr[i]);
    dfs(i + 1, sum);
};

dfs(0, 0);

if ( s === 0 ) count--;

console.log(count);