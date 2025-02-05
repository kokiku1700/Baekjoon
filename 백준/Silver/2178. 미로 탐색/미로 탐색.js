const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1).map(e => e.split('').map(Number));
let visited = Array.from({ length: n }, () => Array(m).fill(false));
const dirX = [0, 0, -1, 1];
const dirY = [1, -1, 0, 0];

function bfs ( startX, startY ) {
    let queue = [[startX, startY]];

    visited[startX][startY] = true;

    while ( queue.length ) {
        const [x, y] = queue.shift();

        for ( let i = 0; i < 4; i++ ) {
            const moveX = x + dirX[i];
            const moveY = y + dirY[i];
    
            if ( 0 <= moveX && 0 <= moveY && moveX < n && moveY < m ) {
                if ( arr[moveX][moveY] === 1 && !visited[moveX][moveY] ) {
                    queue.push([moveX, moveY]);
                    visited[moveX][moveY] = true;
                    arr[moveX][moveY] = arr[x][y] + 1;
                }
            }
        }
    }

}

bfs(0, 0);
console.log(arr[n - 1][m - 1]);