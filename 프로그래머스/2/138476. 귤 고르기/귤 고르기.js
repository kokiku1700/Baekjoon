function solution(k, tangerine) {
    let answer = 0;
    let map = new Map();
    let arr = [];
    let num = 0;

    tangerine.forEach(e => {
        if ( map.has(e) ) {
            map.set(e, map.get(e) + 1);
        } else {
            map.set(e, 1);
        }
    });
    
    arr = [...map].sort((a, b) => {
        return b[1] - a[1];
    });
    
    for ( let i = 0; i < arr.length; i++ ) {
        answer++;
        num += arr[i][1];
        if ( num >= k ) break;
    }

    return answer;
};