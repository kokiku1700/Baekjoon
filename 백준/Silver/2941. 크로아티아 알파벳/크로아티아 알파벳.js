const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const obj = [
    'c=',
    'c-',
    'dz=',
    'd-',
    'lj',
    'nj',
    's=',
    'z='
];
let count = 0;
let idx = 0;

while ( idx < input.length ) {
    const str2 = input.slice(idx, idx + 2);
    const str3 = input.slice(idx, idx + 3);

    if ( obj.includes(str2) ) {
        idx += 2;
    } else if ( obj.includes(str3) ) {
        idx += 3;
    } else {
        idx++;
    };
    count++;
}

console.log(count);