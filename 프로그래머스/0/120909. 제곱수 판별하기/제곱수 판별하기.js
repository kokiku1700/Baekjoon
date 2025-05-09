function solution(n) {
    let answer = 2;
    
    for ( let i = 1; i <= Math.sqrt(n); i++ ) {
        if ( n / i === i ) {
            answer = 1;
            break;
        }
    } 
    
    return answer;
}