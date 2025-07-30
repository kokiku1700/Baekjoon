const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
let str = input.split('');

for ( let i = 0; i < str.length; i++ ) {
    let num = str[i].charCodeAt();

    if ( str[i] !== " " && num > 64 ) {
        if ( str[i].toLowerCase() === str[i] ) {
            if ( num + 13 > 122 ) {
                num += 13 - 122;
                str[i] = String.fromCharCode(96 + num);
            } else {
                str[i] = String.fromCharCode(num + 13);
            }
        } else {
            if ( num + 13 > 90 ) {
                num += 13 - 90;
                str[i] = String.fromCharCode(64 + num);
            } else {
                str[i] = String.fromCharCode(num + 13);
            }
        }
    }
}

console.log(str.join(''));