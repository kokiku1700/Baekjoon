function solution(name, yearning, photo) {
    const answer = [];
    
    photo.forEach(e => {
        let score = 0;
        
        e.forEach(v => {
            if ( name.includes(v) ) {
                score += yearning[name.indexOf(v)];
            }
        })
        answer.push(score);
    })
    return answer;
}