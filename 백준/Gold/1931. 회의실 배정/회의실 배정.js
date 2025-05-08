const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let endTime = 0;
let count = 0;
const time = arr
            .map(e => e.split(' ').map(Number))
            .sort((a, b) => {
                if ( a[1] === b[1] ) {
                    return a[0] - b[0];
                } else {
                    return a[1] - b[1];
                }
            });


time.forEach(e => {
    const [start, end] = e;

    if ( endTime <= start ) {
        endTime = end;
        count++;
    };
});

console.log(count);