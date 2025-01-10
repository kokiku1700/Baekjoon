const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();
let result = "";

if ( input >= 620 && input <= 780 ) {
    result = "Red";
} else if ( input >= 590 && input < 620 ) {
    result = "Orange";
} else if ( input >= 570 && input < 590 ) {
    result = "Yellow";
} else if ( input >= 495 && input < 570 ) {
    result = "Green";
} else if ( input >= 450 && input < 495 ) {
    result = "Blue"
} else if ( input >= 425 && input < 450 ) {
    result = "Indigo";
} else {
    result = "Violet";
};

console.log(result);