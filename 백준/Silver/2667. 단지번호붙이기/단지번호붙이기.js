const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const visited = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(false));
const arr = [...input].map(e => e.split('').map(Number));
const result = [];
const dirX = [0, 0, 1, -1];
const dirY = [1, -1, 0, 0];

function dfs (startX, startY) {
    if ( visited[startX][startY] ) return;

    let count = 1;

    visited[startX][startY] = true;

    for ( let i = 0; i < 4; i++ ) {
        const moveX = startX + dirX[i];
        const moveY = startY + dirY[i];

        if ( 0 <= moveX && 0 <= moveY && moveX < n && moveY < n ) {
            if ( !visited[moveX][moveY] && arr[moveX][moveY]) {
                count += dfs(moveX, moveY);
            }
        }
    }
    return count;
};  

for ( let i = 0; i < n; i++ ) {
    for ( let j = 0; j < n; j++ ) {
        if ( arr[i][j] === 1 && !visited[i][j] ) {
            result.push(dfs(i, j));
        }
    }
}

result.sort((a, b) => a - b);

console.log([result.length, ...result].join('\n'));