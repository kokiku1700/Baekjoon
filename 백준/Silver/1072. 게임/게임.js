const fs = require('fs');
const [x, y] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let min = 0;
let max = Number.MAX_SAFE_INTEGER;
const z = Math.floor(y * 100 / x);

while ( min <= max ) {
    if ( z >= 99 ) {
        min = -1;
        break;
    }

    let mid = Math.floor((max + min) / 2);
    let per = Math.floor((y + mid) * 100 / (x + mid));

    if ( per > z  ) {
        max = mid - 1;
    } else {
        min = mid + 1;
    }
}
console.log(min);