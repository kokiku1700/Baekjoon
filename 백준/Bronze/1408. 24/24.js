const fs = require('fs');
const [sy, dh] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const syTime = sy.split(':').map(Number);
const dhTime = dh.split(':').map(Number);
const result = [0, 0, 0];

for ( let i = 2; i >= 0; i-- ) {
    if ( syTime[i] > dhTime[i] ) {
        if ( i > 0 ) {
            result[i] = String(dhTime[i] + 60 - syTime[i]).padStart(2, "0");
        } else {
            result[i] = String(dhTime[i] + 24 - syTime[i]).padStart(2, "0");
        }
        dhTime[i - 1]--;
    } else {
        result[i] = String(dhTime[i] - syTime[i]).padStart(2, "0");
    }
};

console.log(result.join(':'));