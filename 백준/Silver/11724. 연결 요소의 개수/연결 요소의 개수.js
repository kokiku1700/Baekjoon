const fs = require('fs');
const [nm, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = nm.split(' ').map(Number);
const graph = new Array(n + 1).fill(0).map(() => new Array());

for ( let i = 0; i < m; i++ ) {
    const [from, to] = arr[i].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

let visited = new Array(n + 1).fill(0);
let count = 0;

const BFS = ( v ) => {
    let queue = [v];

    while ( queue.length ) {
        let x = queue.shift();

        for ( let i of graph[x] ) {
            if ( visited[i] === 0 ) {
                visited[i] = 1;
                queue.push(i);
            }
        }
    }
} 

for ( let i = 1; i <= n; i++ ) {
    if ( !visited[i] ) {
        BFS(i);
        count++;
    }
}

console.log(count);