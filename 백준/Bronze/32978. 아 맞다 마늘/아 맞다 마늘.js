const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const recipe = input[1].split(' ');
const ingredient = input[2].split(' ');
let result = "";

for ( let i = 0; i < n; i++ ) {
    if ( !ingredient.includes(recipe[i]) ) {
        result = recipe[i];
        break;
    };
};

console.log(result);