const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(e => e.split(' ').map(Number));
const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
const dirX = [1, -1, 0, 0];
const dirY = [0, 0, 1, -1];
let [x, y] = [0, 0];

for ( let i = 0; i < n; i++ ) {
    if ( arr[i].includes(2) ) {
        x = i;
        y = arr[i].indexOf(2);
        break;
    };
};

arr[x][y] = 0;

function bfs (startX, startY) {
    let queue = [[startX, startY]];

    visited[startX][startY] = true;

    while ( queue.length ) {
        let [x, y] = queue.shift();

        for ( let i = 0; i < 4; i++ ) {
            const moveX = x + dirX[i];
            const moveY = y + dirY[i];

            if ( 0 <= moveX && 0 <= moveY && moveX < n && moveY < m ) {
                if ( !visited[moveX][moveY] && arr[moveX][moveY] === 1 ) {
                    visited[moveX][moveY] = true;
                    arr[moveX][moveY] = arr[x][y] + 1;
                    queue.push([moveX, moveY]);
                }
            }
        }
    }
}

bfs(x, y);

for ( let i = 0; i < n; i++ ) {
    for ( let j = 0; j < m; j++ ) {
        if ( !visited[i][j] && arr[i][j] === 1 ) {
            arr[i][j] = -1;
        }
    }
}

console.log(arr.map(e => e.join(' ')).join('\n'));