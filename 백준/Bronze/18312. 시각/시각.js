const fs = require('fs');
const [n, l] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let count = 0;

for ( let i = 0; i <= n; i++ ) {
    for ( let j = 0; j <= 59; j++ ) {
        for ( let k = 0; k <= 59; k++ ) {
            let hourStr = i < 10 ? 0 + i.toString() : i.toString(); 
            let minuteStr = j < 10 ? 0 + j.toString() : j.toString(); 
            let secondStr = k < 10 ? 0 + k.toString() : k.toString(); 
            let str = hourStr.toString() + minuteStr.toString() + secondStr.toString();

            if ( str.includes(l.toString()) ) {
                count++;
            }
        }
    }
}

console.log(count);