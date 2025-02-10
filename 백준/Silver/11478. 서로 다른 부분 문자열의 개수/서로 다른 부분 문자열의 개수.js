const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let count = 1;
let set = new Set();

while ( count < input.length + 1 ) {
    for ( let i = 0; i < input.length; i++ ) {
        let str = input.slice(i, i + count);
        set.add(str);
    };
    count++;
};

console.log(set.size);