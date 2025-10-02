function solution(board, moves) {
    let answer = 0;
    let basket = [];
    
    moves.forEach(e => {
        for ( let i = 0; i < board.length; i++ ) {
            if ( board[i][e - 1] === 0 ) {
                continue;
            } else {
                if ( basket.length !== 0 && basket[basket.length - 1] === board[i][e - 1] ) {
                    answer += 2;
                    basket.pop();
                } else {
                    basket.push(board[i][e - 1]);
                }
                board[i][e - 1] = 0;
                break;
            }
        }
    })
    
    return answer;
}