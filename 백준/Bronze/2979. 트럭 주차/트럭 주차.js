const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b, c] = input.shift().split(' ').map(Number);
const times = new Array(101).fill(0);
let result = 0;

input.forEach(e => {
    const [start, end] = e.split(' ').map(Number);

    for ( let i = start; i < end; i++ ) {
        times[i]++;
    };
});

times.forEach(e => {
    switch ( e ) {
        case 1:
            result += a;
            break;
        case 2: 
            result += b * 2;
            break;
        case 3: 
            result += c * 3;
            break;
    };
});

console.log(result);