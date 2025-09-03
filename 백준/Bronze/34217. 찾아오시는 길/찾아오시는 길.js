const fs = require('fs');
const [start, end] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [startH, startY] = start.split(' ').map(Number);
const [endH, endY] = end.split(' ').map(Number);
const sumH = startH + endH;
const sumY = startY + endY;
let result = "";

if ( sumH < sumY ) {
    result = "Hanyang Univ.";    
} else if ( sumH > sumY ) {
    result = "Yongdap";
} else {
    result = "Either";
};

console.log(result);