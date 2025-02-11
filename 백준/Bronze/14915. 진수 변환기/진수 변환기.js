const fs = require('fs');
const [m, n] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(m.toString(n).toUpperCase());