const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let result = [];

for ( let i = 0; i < n; i++ ) {
    const ps = input[i].split('');
    let arr = [];
    
    for ( let j = 0; j < ps.length; j++ ) {
        if ( arr.length === 0 ) {
            arr.push(ps[j]);
        } else {
            if ( arr[arr.length - 1] === "(" && ps[j] === ")" ) arr.pop();
            else arr.push(ps[j]); 
        }
    } 
    result.push(arr.length ? "NO" : "YES");
};

console.log(result.join('\n'));