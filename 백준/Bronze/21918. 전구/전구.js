const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

input.forEach(e => {
    let [a, b, c] = e.split(' ').map(Number);

    if ( a === 1 ) {
        arr[b - 1] = c;
    } else if ( a === 2 ) {
        for ( let i = b - 1; i < c; i++ ) {
            arr[i] === 1 ? arr[i] = 0 : arr[i] = 1;
        }
    } else if ( a === 3 ) {
        for ( let i = b - 1; i < c; i++ ) {
            arr[i] = 0;
        }
    } else {
        for ( let i = b - 1; i < c; i++ ) {
            arr[i] = 1;
        }
    };
});

console.log(arr.join(' '));