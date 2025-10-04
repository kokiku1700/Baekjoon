function solution(s) {
    const answer = [];
    let map = new Map();
    
    s.split('').forEach((e, i) => {
        if ( map.has(e) ) {
            answer.push(i - map.get(e));
        } else {
            answer.push(-1);
        }
        map.set(e, i);
    });
    
    return answer;
}