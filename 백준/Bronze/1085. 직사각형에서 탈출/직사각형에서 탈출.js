const fs = require('fs');
const [x, y, w, h] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let arr = [x, y];
arr.push(w - x);
arr.push(h - y);

console.log(Math.min(...arr));
