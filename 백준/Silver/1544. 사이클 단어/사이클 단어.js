const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let set = new Set();
set.add(input.shift());

input.forEach(e => {
    let arr = e.split('');
    let bool = false;

    for ( let i = 0; i < arr.length; i++ ) {
        if ( set.has(arr.join(''))) {
            bool = true;
            break;
        } 
        arr.unshift(arr.pop());
    };

    bool ? true : set.add(arr.join(''));
});

console.log(set.size);