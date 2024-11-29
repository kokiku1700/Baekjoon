const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input.shift();
let result = [];

for ( let i = 0; i < n; i++ ) {
    let xArr = input[i * 4 + 2].split(' ').map(Number);
    let yArr = input[i * 4 + 3].split(' ').map(Number);
    let maxX = Math.max(...xArr);
    let maxY = Math.max(...yArr);

    let vic = "";

    if ( maxX >= maxY ) {
        vic = "S";
    } else {
        vic = "B";
    } 

    result.push(vic);
};

if ( result.length === 0 ) {
    result.push("C");
}
console.log(result.join('\n'));