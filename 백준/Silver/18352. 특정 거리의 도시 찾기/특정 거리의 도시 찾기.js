const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, k, x] = input.shift().split(' ').map(Number);
let graph = [...Array(n + 1)].map(e => e = []);

input.forEach(e => {
    let [from, to] = e.split(' ').map(Number);
    graph[from].push(to);
});

let visited = new Array(n + 1).fill(0);
let answer = [];

function BFS ( v ) {
    let queue = [v];
    visited[v] = 1;

    while ( queue.length ) {
        let now = queue.shift();

        if ( visited[now] === k + 1 ) {
            answer.push(now);
            continue;
        } 

        for ( let i = 0; i < graph[now].length; i++ ) {
            let next = graph[now][i];

            if ( !visited[next] ) {
                queue.push(next);
                visited[next] = visited[now] + 1;
            };
        };
    }
} 
BFS(x);

console.log(answer.length ? answer.sort((a, b) => a - b).join('\n') : -1);