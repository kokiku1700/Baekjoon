const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const [a, b] = input.shift().split(' ').map(Number);
const m = +input.shift();
let graph = new Array(n + 1);
let result, degree = 0;

for ( let i = 0; i < graph.length; i++ ) {
    graph[i] = [];
};

input.forEach(e => {
    let [from, to] = e.split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
});

const visited = new Array(n + 1).fill(0);

function DFS ( v, lev ) {
    if ( v === b ) result = lev;

    for ( const value of graph[v] ) {
        if ( !visited[value] ) {
            visited[value] = 1;
            DFS(value, lev + 1);
        }
    }
};
DFS(a, degree);

console.log(result ? result : -1);