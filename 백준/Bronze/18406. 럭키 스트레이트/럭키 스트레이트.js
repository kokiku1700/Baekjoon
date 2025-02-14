const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const len = input.length / 2;
const left = input.slice(0, len)
            .split('')
            .map(Number)
            .reduce((a, b) => a + b);
const right = input.slice(len)
            .split('')
            .map(Number)
            .reduce((a, b) => a + b);
const result = left === right ? "LUCKY" : "READY";

console.log(result);