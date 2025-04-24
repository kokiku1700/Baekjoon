const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' '));
let result = "";

cat: for ( let i = 0; i < input.length; i++ ) {
    for ( let j = 0; j < input.length; j++ ) {
        if ( input[i][j] === "w" ) {
            result = "chunbae";
            break cat;
        } else if ( input[i][j] === "b" ) {
            result = 'nabi';
            break cat;
        } else if ( input[i][j] === "g" ) {
            result = "yeongcheol";
            break cat;
        };
    };
};

console.log(result);