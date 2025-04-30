const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const helmet = Math.max(...input[1].split(' ').map(Number));
const vest = Math.max(...input[2].split(' ').map(Number));

console.log(helmet + vest);