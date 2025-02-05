const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const numArr = input[1].split(' ').map(Number).sort((a, b) => a - b);

function solution ( n, m, array ) {
    let visited = new Array(n + 1).fill(false);
    let seq = new Array(m);
    let result = "";

    function dfs ( k, start ) {
        if ( k === m ) {
            let arr = [];

            for ( let i = 0; i < m; i++ ) {
                arr.push(seq[i]);
            }

            return result += `${arr.join(' ')}\n`;
        }

        for ( let i = start; i < n; i++ ) {
            if ( !visited[i] ) {
                seq[k] = array[i];
                visited[i] = true;
                dfs(k + 1, i);
                visited[i] = false;
            }
        }
    }
    dfs(0, 0);
    return result;
}

console.log(solution(n, m, numArr));