const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
let result = [];

for ( let i = 0; i < n; i++ ) {
    const note1N = +input.shift();
    const note1 = input.shift().split(' ').map(Number); 
    let set = new Set(note1);
    const note2N = +input.shift();
    const note2 = input.shift().split(' ').map(Number);
    
    for ( let i = 0; i < note2N; i++ ) {
        if ( set.has(note2[i]) ) result.push(1);
        else result.push(0);
    }
}

console.log(result.join('\n'));