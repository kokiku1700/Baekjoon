const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const arr = input.map(e => e.split(' ').map(Number));
const areaNum = new Array(100).fill(0);
const dirX = [1, -1, 0, 0];
const dirY = [0, 0, -1, 1];

function dfs ( startX, startY, num, visit ) {
    if ( visit[startX][startY] ) return; 

    visit[startX][startY] = true;
    
    for ( let i = 0; i < 4; i++ ) {
        const moveX = dirX[i] + startX;
        const moveY = dirY[i] + startY;

        if ( 0 <= moveX && 0 <= moveY && moveX < n && moveY < n ) {
            if ( !visit[moveX][moveY] && arr[moveX][moveY] > num ) {
                dfs(moveX, moveY, num, visit);
            }
        }
    }
};

for ( let i = 0; i < 100; i++ ) {
    const visited = new Array(n).fill(0).map(() => new Array(n).fill(false));
    let count = 0;

    for ( let j = 0; j < n; j++ ) {
        for ( let k = 0; k < n; k++ ) {
            if ( !visited[j][k] && arr[j][k] > i ) {
                dfs(j, k, i, visited);
                count++;
            }
        }
    }
    areaNum[i] = count;    
};

console.log(Math.max(...areaNum));