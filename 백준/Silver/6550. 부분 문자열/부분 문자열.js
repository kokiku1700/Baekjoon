const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];

input.forEach(e => {
    const [str1, str2] = e.split(' ');
    let str = '';
    let count = 0;

    for ( let i= 0; i < str2.length; i++ ) {
        if ( count === str1.length ) break;

        if ( str1[count] === str2[i] ) {
            str += str2[i];
            count++; 
        };
    };

    result.push(str1 === str ? "Yes" : "No");
});

console.log(result.join('\n'))