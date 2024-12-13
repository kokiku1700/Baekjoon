const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const students = input.shift().split(' ');
let map = new Map();

students.forEach(e => {
    map.set(e, 0);
});

input.forEach(e => {
    const names = e.split(' ');

    names.forEach(v => {
        map.set(v, map.get(v) + 1);
    });
});

let result = [...map.entries()].sort((a, b) => b[1] - a[1]).map(e => e.join(' '));

console.log(result.join('\n'));