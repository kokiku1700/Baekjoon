const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution (n, m) {
    const seq = new Array(m).fill(0);
    const visited = new Array(n).fill(false);
    let result = '';

    function dfs (k, start) {
        if ( k === m ) {
            const arr = [];
            for ( let i = 0; i < m; i++ ) {
                arr.push(seq[i]);
            }            
            return result += `${arr.join(' ')}\n`
        }
        for ( let i = start; i <= n; i++ ) {
            if ( !visited[i] ) {
                seq[k] = i;
                visited[i] = true;
                dfs(k + 1, i);
                visited[i] = false;
            }
        }
    }

    dfs(0, 1);
    return result;
}

console.log(solution(n, m));