const fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e => e.split('').reverse());
let num = 0;
let binArr = [];

if ( a.length > b.length ) {
    let rep = "0".repeat(a.length - b.length).split('');
    b = [...b, ...rep];
} else {
    let rep = "0".repeat(b.length - a.length).split('');
    a = [...a, ...rep];
};

for ( let i = 0; i < a.length; i++ ) {
    let bin = +a[i] + +b[i] + num;

    if ( bin >= 2 ) {
        num = 1;
        bin = bin - 2;
    } else {
        num = 0
    }
    
    binArr.push(bin);
};

if ( num === 1 ) {
    binArr.push(num);
}

while ( binArr[binArr.length - 1] === 0 ) {
    if (binArr.length === 1 ) {
        break;
    }
    binArr.pop();
}

let result = binArr.reverse().join('');
console.log(result);