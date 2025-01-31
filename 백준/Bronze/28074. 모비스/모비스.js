const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const arr = ['M', 'O', 'B', 'I', 'S'].sort();
let set = new Set(input.sort());
let newArr = Array.from(set);
let result = "YES";

if ( newArr.length >= arr.length ) {
    for ( let i = 0; i < 5; i++ ) {
        if ( !newArr.includes(arr[i]) ) {
            result = "NO";
            break;
        };
    };
} else {
    result = "NO";
}

console.log(result);