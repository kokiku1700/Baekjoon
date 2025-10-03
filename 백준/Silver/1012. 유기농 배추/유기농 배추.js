const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const result = [];

for ( let i = 0; i < n; i++ ) {
    const [n, m, k] = input.shift().split(' ').map(Number);
    const arr = input.splice(0, k);
    const graph = new Array(n).fill(0).map(() => new Array(m).fill(0));
    const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
    const dirX = [1, -1, 0, 0];
    const dirY = [0, 0, 1, -1];
    let count = 0;

    arr.forEach(e => {
        let [x, y] = e.split(' ').map(Number);

        graph[x][y] = 1;
    });

    function dfs (x, y) {
        if ( visited[x][y] ) return;

        visited[x][y] = true;
        
        for ( let i = 0; i < 4; i++ ) {
            const moveX = x + dirX[i];
            const moveY = y + dirY[i];

            if ( 0 <= moveX && 0 <= moveY && moveX < n && moveY < m ) {
                if ( !visited[moveX][moveY] && graph[moveX][moveY] === 1 ) {
                    dfs(moveX, moveY);
                }
            };
        };
    };

    for ( let i = 0; i < n; i++ ) {
        for ( let j = 0; j < m; j++ ) {
            if ( !visited[i][j] && graph[i][j] === 1 ) {
                dfs(i, j);
                count++;
            }
        }
    }
    result.push(count);
};

console.log(result.join('\n'));