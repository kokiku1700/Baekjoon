const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let map = new Map();
let result = 0;

for ( let i = 0; i < 2; i++ ) {
    let num = 512;

    while ( num > 0 ) {
        if ( num <= input[i] ) {
            if ( map.has(num) ) {
                map.set(num, map.get(num) + 1 );
            } else {
                map.set(num, 1);
            }
            input[i] -= num;
        }
        num /= 2;
    }
};

for ( [k, v] of map ) {
    if ( v === 1 ) {
        result += k;
    }
}

console.log(result);   