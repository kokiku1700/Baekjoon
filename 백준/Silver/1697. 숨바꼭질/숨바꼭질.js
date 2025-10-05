const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let arr = new Array(Math.max(100000, k * 2) + 1).fill(0);
let visited = new Array(Math.max(100000, k * 2) + 1);

function bfs (n) {
    const queue = [n];

    visited[n] = true;

    while ( queue.length ) {
        const loc = queue.shift();

        if ( loc === k ) return arr[k];

        for ( let next of [loc - 1, loc + 1, loc * 2]) {
            if ( loc >= 0 && next <= arr.length && !visited[next] ) {
                visited[next] = true;
                arr[next] = arr[loc] + 1;
                queue.push(next);
            }
        }
        
    };
};

console.log(bfs(n));