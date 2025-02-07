const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.splice(0, n).map(e => e.split(' ').map(Number));
let sumArr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
let result = [];

arr.forEach((e, x) => {
    e.forEach((v, y) => {
        sumArr[x + 1][y + 1] = v;
    });
});

for ( let i = 1; i <= n; i++ ) {
    for ( let j = 1; j <= n; j++ ) {
        sumArr[i][j] += sumArr[i][j - 1] + sumArr[i - 1][j] - sumArr[i - 1][j - 1];
    }
}

input.forEach(e => {
    let [x1, y1, x2, y2] = e.split(' ').map(Number);
    result.push(sumArr[x2][y2] - sumArr[x2][y1 - 1] - sumArr[x1 - 1][y2] + sumArr[x1 - 1][y1 - 1]);
})

console.log(result.join('\n'));