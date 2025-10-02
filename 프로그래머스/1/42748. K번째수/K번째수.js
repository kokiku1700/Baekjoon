function solution(array, commands) {
    const answer = [];
    
    commands.forEach(e => {
        const i = e[0] === 0 ? 0 : e[0] - 1;
        const j = e[1];
        const k = e[2] - 1;
        let arr = [...array].slice(i, j);
        arr.sort((a, b) => a - b);
        answer.push(arr[k]);
    });
    return answer;
}
