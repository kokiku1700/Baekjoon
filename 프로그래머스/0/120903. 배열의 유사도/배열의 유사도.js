function solution(s1, s2) {
    let count = 0;
    
    s2.forEach(e => {
        if ( s1.includes(e) ) count++;
    })
    return count;
}