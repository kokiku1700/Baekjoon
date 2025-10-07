const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
const result = [];

while ( input.length ) {
    const [w, h] = input.shift().split(' ').map(Number);
    const arr = input.splice(0, h).map(e => e.split(' ').map(Number));
    const visited = new Array(h).fill(0).map(() => new Array(w).fill(false));
    const dirX = [1, -1, 0, 0, 1, -1, 1, -1];
    const dirY = [0, 0, 1, -1, 1, -1, -1, 1];
    let count = 0;

    function dfs ( startX, startY ) {
        if ( visited[startX][startY] ) return;

        visited[startX][startY] = true;

        for ( let i = 0; i < 8; i++ ) {
            const moveX = startX + dirX[i];
            const moveY = startY + dirY[i];

            if ( 0 <= moveX && 0 <= moveY && moveX < h && moveY < w ) {
                if ( !visited[moveX][moveY] && arr[moveX][moveY] === 1 ) {
                    dfs(moveX, moveY);
                };
            };
        };
    };

    for ( let i = 0; i < h; i++ ) {
        for ( let j = 0; j < w; j++ ) {
            if ( arr[i][j] === 1 && !visited[i][j] ) {
                dfs(i, j);
                count++;
            }
        }
    }
    
    result.push(count);
};

console.log(result.join('\n'));