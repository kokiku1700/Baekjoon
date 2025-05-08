const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const m = +input.shift();
let graph = new Array(n + 1).fill(0).map(() => new Array());

for ( let i = 0; i < m; i++ ) {
    let [from, to] = input[i].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

let visited = new Array(n + 1).fill(0);
let answer = [];

function DFS ( v ) {
    if ( visited[v] === 1 ) return;
    visited[v] = 1;
    answer.push(v);

    for ( let i = 0; i < graph[v].length; i++ ) {
        let next = graph[v][i];

        if ( visited[next] === 0 ) {
            DFS(next)
        }
    }
}
DFS(1);
console.log(answer.length - 1);