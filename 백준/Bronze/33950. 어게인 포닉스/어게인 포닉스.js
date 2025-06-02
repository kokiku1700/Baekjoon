const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const result = [];

input.forEach(e => {
    const arr= e.split('');
    const str = [];
    
    for ( let i = 0; i < arr.length; i++ ) {
        str.push(arr[i]);
        if ( arr[i] === 'P' && arr[i + 1] === "O" ) {
            str.push("H");
        };
    };
    result.push(str.join(''));
});

console.log(result.join('\n'));