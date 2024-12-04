const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

input.sort((a, b) => {
    let aArr = a.split(' ');
    let bArr = b.split(' ');

    if ( aArr[1] === bArr[1] ) {
        if ( aArr[2] === bArr[2] ) {
            if ( aArr[3] === bArr[3] ) {
                if ( a > b ) return 1;
                else if ( a < b ) return -1;
                else 0;
            } else {
                return bArr[3] - aArr[3];
            }
        } else {
            return aArr[2] - bArr[2];
        }
    } else {
        return bArr[1] - aArr[1];
    }
});

let result = [];

input.forEach(e => {
    result.push(e.split(' ')[0]);
});

console.log(result.join('\n'));