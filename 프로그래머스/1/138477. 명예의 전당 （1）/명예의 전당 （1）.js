function solution(k, score) {
    let answer = [];
    let best = [];
    
    score.forEach(e => {
       if ( best.length < k ) {
           best.push(e);
       } else {
           let min = Math.min(...best);
           min >= e ? best : best[best.indexOf(min)] = e;
       }
        answer.push(Math.min(...best));
    });
    
    return answer;
}