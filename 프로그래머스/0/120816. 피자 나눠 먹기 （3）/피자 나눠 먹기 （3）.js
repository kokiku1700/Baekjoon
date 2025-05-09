function solution(slice, n) {
    let answer = 1;
    
    while ( slice * answer / n < 1 ) {
        answer++;
    }
    
    return answer;
}