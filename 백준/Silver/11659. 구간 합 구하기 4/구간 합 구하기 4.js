const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
let newArr = new Array(arr.length + 1).fill(0)
let result = [];

arr.forEach((e, i) => {
    newArr[i + 1] = newArr[i] + e;
});

input.slice(2).forEach(e => {
    let [n, m] = e.split(' ').map(Number);
    result.push(newArr[m] - newArr[n - 1]);
});

console.log(result.join('\n'));