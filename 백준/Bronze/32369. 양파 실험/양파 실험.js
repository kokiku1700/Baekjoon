const fs = require('fs');
const [n, com, cri] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let aOnion = 1;
let bOnion = 1;

for ( let i = 0; i < n; i++ ) {
    aOnion += com;
    bOnion += cri;

    if ( aOnion < bOnion ) {
        let temp = aOnion;
        aOnion = bOnion;
        bOnion = temp;
    } else if ( aOnion === bOnion ) {
        bOnion--;
    }
};

console.log(aOnion, bOnion);