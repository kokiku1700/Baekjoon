const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let sum = 0;
let gradeSum = 0;

input.forEach(e => {
    const [subject, grade, rating] = e.split(' ');
    let num = 0;

    switch ( rating ) {
        case "A+": 
            num = 4.5;
            break;
        case "A0": 
            num = 4.0;
            break;
        case "B+": 
            num = 3.5;
            break;
        case "B0": 
            num = 3.0;
            break;
        case "C+": 
            num = 2.5;
            break;
        case "C0": 
            num = 2.0;
            break;
        case "D+": 
            num = 1.5;
            break;
        case "D0": 
            num = 1.0;
            break;
        case "F": 
            num = 0.0;
            break;
        default: 
            return;
    }
    if ( rating !== "P" ) {
        sum += (grade * num);
        gradeSum += +grade;
    }
});

console.log((sum / gradeSum).toFixed(6));