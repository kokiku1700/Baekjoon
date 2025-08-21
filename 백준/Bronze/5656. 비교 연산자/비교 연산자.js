const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];

for ( let i = 0; i < input.length; i++ ) {
    const [num1, comparison, num2] = input[i].split(' ');
    let bool = "";

    if ( comparison === "E" ) break;

    switch ( comparison ) {
        case ">": 
            bool = Number(num1) > Number(num2);
            break;
        case ">=": 
            bool = Number(num1) >= Number(num2);
            break;
        case "<": 
            bool = Number(num1) < Number(num2);
            break;
        case "<=": 
            bool = Number(num1) <= Number(num2);
            break;
        case "==": 
            bool = Number(num1) === Number(num2);
            break;
        case "!=": 
            bool = Number(num1) !== Number(num2);
            break;   
    }

    result.push(`Case ${i + 1}: ${bool}`);
}

console.log(result.join("\n"));