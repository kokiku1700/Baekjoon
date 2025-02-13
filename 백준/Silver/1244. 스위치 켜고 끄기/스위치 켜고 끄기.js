const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const switchN = +input.shift();
const switchArr = input.shift().split(' ').map(Number);
const n = input.shift();
let result = '';

input.forEach(e => {
    let [gender, idx] = e.split(' ').map(Number);
    
    if ( gender === 1 ) {
        for ( let i = idx; i <= switchN; i += idx ) {
            switchArr[i - 1] = switchArr[i - 1] === 1 ? 0 : 1;
        };
    } else {
        let min = idx;
        let max = idx;
        
        while ( true ) {
            if ( min === 0 || max > switchN ) {
                min++;
                max--;
                break;
            }

            if ( switchArr[min - 2] === switchArr[max] ) {
                min--;
                max++;
            } else {
                break;
            }
        };
        for ( let i = min; i <= max; i++ ) {
            switchArr[i - 1] === 1 ? switchArr[i - 1] = 0 : switchArr[i - 1] = 1;
        };
    };
});

for ( let i = 0; i < switchN; i++ ) {
    
    if ( i % 20 === 19 ) {
        result += `${switchArr[i]}\n`;
    } else {
        result += `${switchArr[i]} `;
    }
}

console.log(result.trim());