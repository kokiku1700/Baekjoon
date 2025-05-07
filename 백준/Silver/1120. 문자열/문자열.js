const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const n = Math.abs(a.length - b.length);
const result = [];

if ( n === 0 ) {
    let count = 0;

    for ( let i = 0; i < a.length; i++ ) {
        a[i] !== b[i] ? count++ : count;
    };
    result.push(count);
} else {
    let count = 0;

    for ( let i = 0; i <= n; i++ ) {

        let newB = b.split('').slice(i, a.length + i).join('');
        
        for ( let j = 0; j < a.length; j++ ) {
            a[j] !== newB[j] ? count++ : count;
        };
        result.push(count);
        count = 0;
    };
};

console.log(Math.min(...result));