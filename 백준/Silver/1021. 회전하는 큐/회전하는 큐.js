const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const numArr = Array.from({ length: n }, (e, i) => i + 1 );
let result = 0;

while ( arr.length ) {

    if ( numArr[0] === arr[0] ) {
        arr.shift();
        numArr.shift();
        if ( arr.length === 0 || numArr.length === 1 ) break;
        continue;
    }

    let idx = numArr.indexOf(arr[0]);
    let item = 0;

    if ( numArr.length / 2 <= idx ) {
        item = numArr.pop();
        numArr.unshift(item);
        result++;
    } else {
        item = numArr.shift();
        numArr.push(item);
        result++;
    }

};

console.log(result)