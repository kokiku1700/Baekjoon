const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const arr = new Array(m + 1).fill(true);

arr[0] = false;
arr[1] = false;

for ( let i = 2; i <= Math.sqrt(m); i++ ) {
    if ( arr[i] ) {
        for ( let j = i * i; j <= m; j += i ) {
            arr[j] = false;
        };
    };
};
const newArr = arr.map((e, i) => e ? i : 0);
const filterArr = newArr.slice(n, m + 1).filter(e => e);

if ( filterArr.length ) {
    const min = Math.min(...filterArr);
    const sum = filterArr.reduce((a, b) => a + b);

    console.log(sum + '\n' + min);
} else {
    console.log(-1);
}